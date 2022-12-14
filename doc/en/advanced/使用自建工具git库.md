# 使用自建工具git库

## 为什么要自建工具库
- Github 对lfs流量有控制导致部分工具拉不下来
- Github 下载速度有差异，为保证拉取速度建议使用流畅的工具库

## 如何使用其他工具库
1. 工具相对应的仓库地址，环境变量全部存储在puppy-tools-config仓库中，可通过fork该仓库，修改指定的工具仓库
2. 修改`client/config.ini`中的字段指定puppy-tools-config，如下
```
[COMMON]
; [必填]工具配置库git地址
; 如果github网络慢，建议修改为腾讯工蜂地址：https://git.code.tencent.com/TCA/tca-tools/puppy-tools-config.git
; 这里可以修改为自己维护的puppy-tools-config
TOOL_CONFIG_URL=
PASSWORD_KEY=
; [可选]日志级别,默认为info级别,设置为True则调整为debug级别
DEBUG=
; [可选]是否使用本地工具目录,默认为False,如果设置为True,不从git拉取(需要事先准备好工具，存放到tools目录下)
USE_LOCAL_TOOL=

[TOOL_LOAD_ACCOUNT]
; [可选]拉取工具库的账号密码
; 如果TOOL_CONFIG_URL使用的是腾讯工蜂，账号密码必填（如果没有，可以先去https://git.code.tencent.com注册）
USERNAME=
PASSWORD=
```
3. 修改puppy-tools-config，如下例
```
; ---------------------------------------------------------------------------------------------------------------------
; 配置文件填写说明:
; 填写过程中,如果有多个值,用英文分号分隔
; [env_path]    - 环境变量路径定义，基于tools目录的相对路径，比如：PYLINT_HOME : puppy_tools_common/pylint-1.4.5
; [env_value]   - 环境变量值定义，比如：GIT_SSL_NO_VERIFY : 1
; [tool_url]    - 工具库地址定义，格式：工具名:url，比如 CHECKSTYLE : http://xxxxxx.git
; [common]      - 公共环境配置，比如git环境变量等, 包含以下4个字段
;                 env_path  - 需要的环境变量路径,填写[env_path]中的KEY值，比如 env_path : ANDROID_HOME;CHECKSTYLE_HOME
;                 env_value - 需要的环境变量值,填写[env_value]中的KEY值，比如 env_value : GIT_SSL_NO_VERIFY
;                 path      - 需要加到path环境变量中的路径，基于tools目录的相对路径,推荐使用变量格式，比如 path : ${env_path:PYLINT_HOME}/bin
;                 tool_url  - 需要拉取的工具库,多个地址用英文分号分隔，推荐使用变量格式，比如 tool_url : ${tool_url:PYLINT}
; [工具名]       - 各工具配置，工具名需要与tool目录下的模块名匹配，字段格式参考[common]
; ---------------------------------------------------------------------------------------------------------------------
[base_value]
git_url=https://github.com/TCATools

;------------------
;  1.环境变量路径定义
;------------------
; 用来记录工具路径，会在工具执行时写入到环境变量中
[env_path]
CPPLINT_HOME      : cpplint

;------------------
;  2.环境变量值定义
;------------------
; 记录部分环境变量并在执行时写入环境变量
[env_value]
PYTHON_VERSION    : 3


;------------------
;  3.工具git库定义
;------------------
; 拉工具的仓库地址
[tool_url]
CPPLINT       : ${base_value:git_url}/cpplint.git

;------------------
;  5.各个工具配置
;------------------
; 整合工具配置
[cpplint]
env_path  : CPPLINT_HOME
env_value : PYTHON_VERSION
path      : ${env_path:CPPLINT_HOME}
tool_url  : ${tool_url:CPPLINT}
```
4. 修改拉取工具需要的账号密码
账号密码需在`client/config.ini`中指定
```
[TOOL_LOAD_ACCOUNT]
; [可选]拉取工具库的账号密码
; 如果使用的工具仓库必须账号密码才能拉取则必须填写
USERNAME=
PASSWORD=
```
## 其他工具库建议

1. [腾讯工蜂](https://git.code.tencent.com/groups/TCA/tca-tools/-/projects/list)
2. [自建GitLab](https://docs.gitlab.cn/jh/install/docker.html)

   