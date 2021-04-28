// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: 'Python',
    link: '/python/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      { text: 'Python基础', link: '/pages/123456781/' },
      { text: 'Python进阶', link: '/pages/123456782/' },
      { text: 'Flask框架', link: '/pages/123456783/' },
      { text: 'Django框架', link: '/pages/123456784/' },
      { text: '爬虫', link: '/pages/123456785/' },
      { text: '数据分析', link: '/pages/123456785/' }
    ]
  },
  {
    text: '前端',
    link: '/frontend/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      { text: 'HTML', link: '/pages/123456781/' },
      { text: 'CSS', link: '/pages/123456782/' },
      { text: 'JavaScript', link: '/pages/123456783/' },
      { text: 'Vue', link: '/pages/123456784/' }
    ]
  },
  {
    text: 'DataBase',
    link: '/db/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      { text: 'MySQL', link: '/pages/123456781/' },
      { text: 'Redis', link: '/pages/123456782/' },
      { text: 'MongoDB', link: '/pages/123456783/' }
    ],
  },
  {
    text: '测试',
    link: '/testing/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      { text: '测试基础理论', link: '/pages/123456781/' },
      { text: '接口测试', link: '/pages/123456782/' },
      { text: '性能测试', link: '/pages/123456783/' },
      { text: 'UI自动化测试', link: '/pages/123456784/' },
      { text: '测试开发', link: '/pages/123456785/' }
    ]
  },
  { text: '关于我', link: '/about/' },
]
