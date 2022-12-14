# -*- encoding: utf-8 -*-
# Copyright (c) 2021-2022 THL A29 Limited
#
# This source code file is made available under MIT License
# See LICENSE for details
# ==============================================================================

"""
TaskProcessMgr
"""
import os
import logging

from node.toolloader.loadtool import ToolLoader, ToolConfigLoader
from util.exceptions import NodeError
from util import errcode
from node.common.userinput import UserInput
from util.textutil import StringMgr
from node.localtask.filtermgr import FilterManager
from node.localtask.taskprocessmgr import TaskProcessMgr
from node.localtask.setincrscan import IncrScanMgr
from node.localtask.initjob import JobInit
from node.localtask.scmauthcheck import ScmAuthCheck
from node.localtask.requestmodify import RequestModify
from util.tooldisplay import ToolDisplay
from node.localtask.scmrevision import ScmRevisionCheck
from util.logutil import LogPrinter

logger = logging.getLogger(__name__)


class TaskRequestGenerator(object):
    def __init__(self, dog_server, source_dir, total_scan, scm_info, scm_auth_info,
                 scm_client, report_file, server_url, scan_history_url, job_web_url,
                 exclude_paths, include_paths, pre_cmd, build_cmd, origin_os_env,
                 repo_id, proj_id, org_sid, team_name, create_from, compare_branch):
        self._total_scan = total_scan
        self._source_dir = source_dir
        self._scm_info = scm_info
        self._scm_client = scm_client
        self._report_file = report_file
        self._dog_server = dog_server
        self._server_url = server_url
        self._repo_id = repo_id
        self._proj_id = proj_id
        self._org_sid = org_sid
        self._team_name = team_name
        self._scan_history_url = scan_history_url
        self._job_web_url = job_web_url
        self._scm_info = scm_info
        self._scm_auth_info = scm_auth_info
        self._source_dir = source_dir
        self._ssh_file = scm_auth_info.ssh_file
        self._scm_username = scm_auth_info.username
        self._scm_password = scm_auth_info.password
        self._total_scan = total_scan
        self._create_from = create_from
        self._exclude_paths = exclude_paths
        self._include_paths = include_paths
        self._skip_processes = {}
        self._origin_os_env = origin_os_env
        self._pre_cmd = pre_cmd
        self._build_cmd = build_cmd
        self._remote_task_names = []
        self._compare_branch = compare_branch

    def generate_request(self, proj_conf):
        """
        ????????????????????????????????????????????????
        :param proj_conf: ??????????????????
        :return: ??????????????????????????????????????????
        """
        job_context = proj_conf["job_context"]

        # ????????????????????????????????????,scm_url??????,?????????????????????scm_url
        if not self._scm_info.scm_url:
            self._scm_info.scm_url = job_context["scm_url"]
        # ????????????????????????????????????,scm_type??????,?????????????????????scm_type
        if not self._scm_info.scm_type:
            self._scm_info.scm_type = job_context["scm_type"]

        # ????????????????????????????????????
        ScmAuthCheck(self._scm_info, self._scm_auth_info, self._source_dir).check_scm_authority()

        # ????????????????????????(self._source_dir=None)????????????,scm_revision=None,?????????????????????????????????
        if not self._scm_info.scm_revision:
            # ????????????????????????scm??????
            remote_scm_info = UserInput().get_remote_scm_info(scm_type=self._scm_info.scm_type,
                                                              scm_url=self._scm_info.scm_url,
                                                              source_dir=self._source_dir,
                                                              username=self._scm_username,
                                                              password=self._scm_password)
            self._scm_info.scm_revision = remote_scm_info.commit_revision

        task_list = proj_conf["tasks"]

        # ??????????????????????????????,????????????????????????
        scm_revision_mgr = ScmRevisionCheck(self._dog_server, self._source_dir, self._total_scan, self._scm_info,
                                            self._scm_client, self._report_file, self._server_url,
                                            self._scan_history_url, self._job_web_url, self._repo_id, self._proj_id,
                                            self._org_sid, self._team_name)
        scm_revision_mgr.check_scm_revision(job_context, task_list)

        # ????????????/??????????????????
        IncrScanMgr.set_incr_scan(proj_conf, self._total_scan)

        task_name_list = [task_request["task_name"] for task_request in task_list]
        if not task_name_list:
            raise NodeError(code=errcode.E_NODE_TASK_CONFIG, msg="??????????????????,????????????????????????,??????????????????????????????????????????????????????.")

        # ???server??????????????????????????????????????????
        job_id, job_heartbeat, task_name_id_maps = JobInit.init_job(self._org_sid, self._team_name, self._dog_server,
                                                                    self._total_scan, self._repo_id, self._proj_id,
                                                                    task_name_list, self._create_from)

        # ???????????????????????????????????????????????????
        remote_tasks_str = os.environ.get("CODEDOG_REMOTE_TASKS", None)
        if remote_tasks_str:
            logger.info("?????????????????????CODEDOG_REMOTE_TASKS=%s" % remote_tasks_str)
            self._remote_task_names = StringMgr.str_to_list(remote_tasks_str)
            # ???????????????????????????????????????
            self._remote_task_names = [task_name for task_name in self._remote_task_names if
                                       task_name in task_name_list]
            if self._remote_task_names:
                logger.info("??????(%s)??????????????????????????????." % self._remote_task_names)
            else:
                logger.warning("????????????CODEDOG_REMOTE_TASKS???????????????(%s)???????????????????????????????????????." % remote_tasks_str)

        # ???????????????CODEDOG_REMOTE_TASKS,????????????CODEDOG_REMOTE_SCAN???????????????true|True,????????????task?????????????????????
        if not self._remote_task_names:
            remote_scan_env = os.getenv("CODEDOG_REMOTE_SCAN", "false")
            if remote_scan_env in ["true", "True"]:
                self._remote_task_names = task_name_list
                logger.info("?????????????????????CODEDOG_REMOTE_SCAN, ????????????(%s)????????????????????????." % self._remote_task_names)

        local_task_names = list(set(task_name_list) - set(self._remote_task_names))
        # ?????????????????????????????????????????????????????????,??????????????????????????????,???????????????????????????,???????????????????????????????????????
        custom_tools = []
        if local_task_names:
            # ????????????????????????????????????????????? customscan ????????????????????????
            for tool_name in local_task_names:
                try:
                    __import__("tool." + tool_name)
                except ModuleNotFoundError:
                    # ???????????????????????????
                    custom_tools.append(tool_name)
                except:
                    # logger.exception("encounter error.")
                    pass
            # ???git?????????????????????,????????????????????????
            ToolConfigLoader().load_tool_config()
            LogPrinter.info(f"Initing other tools ...")
            # ?????????????????????commone?????????????????????????????????????????????include_common=False
            # git??????????????????????????????print??????????????????logging??????
            ToolLoader(tool_names=local_task_names, task_list=task_list, custom_tools=custom_tools,
                       include_common=False).git_load_tools(print_enable=False)

        execute_request_list, self._skip_processes = self._get_execute_request_list(job_context, task_list, self._remote_task_names, custom_tools)

        return execute_request_list, self._skip_processes, job_id, job_heartbeat, task_name_id_maps, self._remote_task_names

    def _get_execute_request_list(self, job_context, task_list, remote_task_names, custom_tools):
        """???????????????????????????????????????"""
        execute_request_list = []

        # ?????????????????????????????????,?????????????????????????????????
        if self._exclude_paths or self._include_paths:
            project_path_filters = FilterManager.get_local_filtered_paths(self._include_paths, self._exclude_paths,
                                                                          self._dog_server, self._repo_id,
                                                                          self._proj_id, self._org_sid, self._team_name)
        else:  # ???????????????server???????????????????????????
            project_path_filters = job_context["path_filters"]

        for task_request in task_list:
            task_name = task_request["task_name"]
            RequestModify.add_params(task_request, job_context, self._scm_info, self._pre_cmd,
                                     self._build_cmd, project_path_filters, self._compare_branch)
            task_params = task_request.get("task_params")
            task_display_name = ToolDisplay.get_tool_display_name(task_request)

            if task_name in remote_task_names:
                self._skip_processes[task_display_name] = task_request["processes"]
            else:
                supported_processes = TaskProcessMgr.get_supported_processes(self._origin_os_env,
                                                                             task_name, task_params, custom_tools)
                remote_procs = list(set(task_request["processes"]) - set(supported_processes))
                if remote_procs:
                    # raise NodeError(code=errcode.E_NODE_TASK_CONFIG, msg=f"?????????????????????{task_name}????????????:{remote_procs}.")
                    logger.warning(f"?????????????????????{task_name}????????????:{remote_procs}.")
                    self._skip_processes[task_display_name] = remote_procs

                if remote_task_names:
                    task_request["private_processes"] = supported_processes
                else:
                    execute_processes = TaskProcessMgr.get_execute_processes(task_display_name, supported_processes,
                                                                             task_request["processes"])
                    task_request["execute_processes"] = execute_processes
                    # ?????????????????????????????????????????????,?????????????????????
                    task_request["private_processes"] = list(set(supported_processes) - set(execute_processes))
                    # ???????????????????????????,??????????????????????????????
                    if execute_processes:
                        execute_request_list.append(task_request)
        return execute_request_list, self._skip_processes
