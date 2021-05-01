// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: 'Python',
    link: '/python/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      { text: 'Python基础', link: '/pages/ccf2d6/' },
      { text: 'Python进阶', link: '' },
      { text: 'Flask框架', link: '' },
      { text: 'Django框架', link: '' },
      { text: '爬虫', link: '' },
      { text: '数据分析', link: '' }
    ]
  },
  {
    text: 'FrontEnd',
    link: '/frontend/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      { text: 'HTML', link: '' },
      { text: 'CSS', link: '' },
      { text: 'JavaScript', link: '' },
      { text: 'Vue', link: '' }
    ]
  },
  {
    text: 'DataBase',
    link: '/db/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      { text: 'MySQL', link: '/pages/779c4a/' },
      { text: 'Redis', link: '' },
      { text: 'MongoDB', link: '' }
    ],
  },
  {
    text: 'Testing',
    link: '/testing/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      { text: '测试基础理论', link: '' },
      { text: '接口测试', link: '' },
      { text: '性能测试', link: '' },
      { text: 'UI自动化测试', link: '' },
      { text: '测试开发', link: '' }
    ]
  },
  {
    text: 'GoLang',
    link: '/golang/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      { text: '测试基础理论', link: '' },
      { text: '接口测试', link: '' },
      { text: '性能测试', link: '' },
      { text: 'UI自动化测试', link: '' },
      { text: '测试开发', link: '' }
    ]
  },
  {
    text: 'Java',
    link: '/java/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      { text: '测试基础理论', link: '' },
      { text: '接口测试', link: '' },
      { text: '性能测试', link: '' },
      { text: 'UI自动化测试', link: '' },
      { text: '测试开发', link: '' }
    ]
  },
  {
    text: 'Other',
    link: '/other/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      { text: '测试基础理论', link: '' },
      { text: '接口测试', link: '' },
      { text: '性能测试', link: '' },
      { text: 'UI自动化测试', link: '' },
      { text: '测试开发', link: '' }
    ]
  },
  { text: '关于我', link: '/about/' },
]
