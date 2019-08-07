module.exports = {
  title: "金融前端组",
  description: 'Department blog',
  base: '/department-blog/',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
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
        text: '标签' // 默认 “标签”gaa
      }
    },
    // 语雀相关配置
    logo: '/head.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebarDepth: 1,
    displayAllHeaders: false,
    sidebar: [
      // 自定义导航栏
    ],
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: '金融前端组',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    startYear: '2018'
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      'vuepress-plugin-yuque', {
        html: true,
        repoUrl: 'https://souche.yuque.com/souche_blog/hxqhhs',
        authToken: 'm3DjDKg7PQVrORVj6ClSpLUjXX2toG8CtwtBLRsO'
      }
    ],
    '@vuepress/medium-zoom',
    'flowchart'
   ]
}
