module.exports = {
  title: "部门博客",
  description: 'study programs and record life',
  base: '/department-blog/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    type: 'department-blog',
    huawei: false,
    displayAllHeaders: true,
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '笔记', link: '/note/', icon: 'reco-document'},
      { text: '时间线', link: '/timeLine/', icon: 'reco-date' },
      { text: '关于我们',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/berlinen/', icon: 'reco-github' },
          { text: '语雀', link: 'https://souche.yuque.com/bggh1p/front-end', icon: '/yuque.png' }
        ]
      }
    ],
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '标签' // 默认 “标签”
      }
    },
    logo: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: [
      {
        title: 'HTML5',
        collapsable: true,
        children: [
          '/note/html5/HTML5的语义元素',
          '/note/html5/HTML5多媒体标签',
          '/note/html5/HTML5表单元素'
        ]
      },
      {
        title: '前端单元测试',
        collapsable: true,
        children: [
          '/note/fe-unit-test/chai',
          '/note/fe-unit-test/mocha',
          '/note/fe-unit-test/vueTestUtils'
        ]
      }
    ],
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'Dasouche',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    startYear: '2018'
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart']
}