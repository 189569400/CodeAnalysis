// Copyright (c) 2021-2022 THL A29 Limited
//
// This source code file is made available under MIT License
// See LICENSE for details
// ==============================================================================

import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { find } from 'lodash';
import { Input, Form, Button, Row, Col, Statistic, Card, message } from 'coding-oa-uikit';
import Group from 'coding-oa-uikit/lib/icon/Group';
import Project from 'coding-oa-uikit/lib/icon/Project';
import Package from 'coding-oa-uikit/lib/icon/Package';

import Copy from '@src/components/copy'
import { useStateStore } from '@src/context/store';
import { t } from '@src/i18n/i18next';
import { getTeamInfo, updateTeamInfo, disableTeam } from '@src/services/team';
import { formatDateTime } from '@src/utils/index';
import DeleteModal from '@src/components/delete-modal';

import style from './style.scss';

const layout = {
  labelCol: { span: 6 },
};

const Profile = () => {
  const [form] = Form.useForm();
  const { orgSid }: any = useParams();
  const [data, setData] = useState<any>({});
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const history = useHistory();
  // 判断用户是否有权限删除团队，仅超级管理员和团队管理员可以删除
  const { userinfo } = useStateStore();
  const isAdmin = !!find(data?.admins, { username: userinfo.username });  // 当前用户是否是管理员
  const [deleteVisible, setDeleteVisible] = useState<boolean>(false);
  const isSuperuser = userinfo.is_superuser;  // 是否为超级管理员
  const deletable = isAdmin || isSuperuser;  // 删除权限

  useEffect(() => {
    if (orgSid) {
      getTeamInfo(orgSid).then((res) => {
        setData(res);
      });
    }
  }, [orgSid]);

  const onFinish = (formData: any) => {
    updateTeamInfo(orgSid, formData).then((res) => {
      message.success(t('团队信息更新成功'));
      reset();
      setData(res);
    });
  };

  const reset = () => {
    setIsEdit(false);
    form.resetFields();
  };

  const onDelete = () => {
    setDeleteVisible(true);
  }

  const handleDeleteTeam = () => {
    disableTeam(orgSid, {
      status: 99
    }).then(() => {
      message.success(t('团队已禁用！'));
      history.push('/teams');
    }).catch((e: any) => {
      console.error(e);
    }).finally(() => setDeleteVisible(false));
  };

  return (
    <div className={style.profile}>
      <DeleteModal
        actionType={t('禁用')}
        objectType={t('团队')}
        addtionInfo={t('后续如需恢复团队，请联系平台管理员在管理后台恢复')}
        confirmName={data.name}
        visible={deleteVisible}
        onCancel={() => setDeleteVisible(false)}
        onOk={handleDeleteTeam}
      />
      <h2 className="mb-lg">{data.name}</h2>
      <div className={style.block}>
        <h3 className="mb-md">{t('团队概览')}</h3>
        <Row gutter={40}>
          <Col span="8">
            <Card>
              <Statistic
                prefix={<Group className="mr-xs" color="#f0850a" />}
                title={t('成员数')}
                value={data.user_count}
                valueStyle={{ color: '#f0850a' }}
              />
            </Card>
          </Col>
          <Col span="8">
            <Card>
              <Statistic
                prefix={<Project className="mr-xs" color="3d98ff" />}
                title={t('项目数')}
                value={data.team_count}
                valueStyle={{ color: '#3d98ff' }}
              />
            </Card>
          </Col>
          <Col span="8">
            <Card>
              <Statistic
                prefix={<Package className="mr-xs" color="3f8600" />}
                title={t('代码库')}
                value={data.repo_count}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
        </Row>
      </div>
      <div>
        <h3 className="mb-md mt-lg">{t('团队信息')}</h3>
        <Form
          {...layout}
          style={{ width: '530px' }}
          form={form}
          initialValues={data}
          onFinish={onFinish}
        >
          <Form.Item
            label={t('团队唯一标识')}
          >
            <div>{data.org_sid} <Copy text={data.org_sid} /></div>
          </Form.Item>
          <Form.Item
            label={t('团队名称11')}
            name="name"
            rules={
              isEdit
                ? [{ required: true, message: t('团队名称为必填项') }]
                : undefined
            }
          >
            {isEdit ? <Input width={400} /> : <>{data.name}</>}
          </Form.Item>
          <Form.Item label={t('团队地址')} name="address">
            {isEdit ? <Input width={400} /> : <>{data.address}</>}
          </Form.Item>
          <Form.Item
            label={t('团队负责人')}
            name="owner"
            rules={
              isEdit
                ? [{ required: true, message: t('团队负责人为必填项') }]
                : undefined
            }
          >
            {isEdit ? <Input width={400} /> : <>{data.owner}</>}
          </Form.Item>
          <Form.Item
            label={t('团队联系方式')}
            name="tel_number"
            rules={
              isEdit
                ? [{ required: true, message: t('团队联系方式为必填项') }]
                : undefined
            }
          >
            {isEdit ? <Input width={400} /> : <>{data.tel_number}</>}
          </Form.Item>
          <Form.Item label={t('创建人')} name="creator">
            <span>{data.creator?.nickname ?? ''}</span>
          </Form.Item>
          <Form.Item label={t('创建时间')} name="created_time">
            <span>{formatDateTime(data.created_time)}</span>
          </Form.Item>
          <div style={{ marginTop: '30px' }}>
            {isEdit ? (
              <>
                <Button type="primary" htmlType="submit" key="submit">
                  {t('确定')}
                </Button>
                <Button className=" ml-12" htmlType="button" onClick={reset}>
                  {t('取消')}
                </Button>
              </>
            ) : (
              <Button
                key="edit"
                htmlType="button"
                type="primary"
                onClick={() => {
                  setIsEdit(true);
                  form.resetFields();
                }}
              >
                {t('编辑')}
              </Button>
            )}
            {deletable && <Button className=" ml-12" htmlType="button" onClick={onDelete} danger type='primary'>
              {t('禁用团队')}
            </Button>}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
