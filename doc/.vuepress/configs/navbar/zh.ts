import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '快速部署',
    link: '/zh/quickStarted/',
  },
  {
    text: '帮助文档',
    link: '/zh/guide/',
  },
  {
    text: 'API',
    link: '/zh/api/',
  },
  {
    text: '了解更多',
    children: [
      {
        text: '深入',
        children: [
          '/zh/advanced/集成代码分析工具.md',
        ],
      },
      {
        text: '依赖安装参考',
        children: [
          '/zh/quickStarted/references/install_python37_on_centos.md',
          '/zh/quickStarted/references/install_python37_on_ubuntu.md',
          '/zh/quickStarted/references/install_mysql_on_centos.md',
          '/zh/quickStarted/references/install_redis_from_source.md',
          '/zh/quickStarted/references/install_redis_on_centos.md',
        ],
      },
    ]
  },
  {
    text: '社区',
    children: [
      '/zh/community/contribute.md',
      '/zh/community/changelog.md',
      '/zh/community/joingroup.md',
      {
        text: '体验官方版本',
        link: 'https://tca.tencent.com/',
      }
    ]
  },
]
