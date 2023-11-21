// import { defineConfig } from 'vitepress'

export default {
  title: "数据结构",
  description: 'Just playing around.',
  outDir: '../dist',
  base: "/data_structure",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar: [
      {
        text: '线性表',
        items: [
          { text: '顺序存储结构', link: '/linear/0001' },
          { text: '链式存储结构', link: '/linear/0002' },
          { text: '静态链表', link: '/linear/0003' },
          { text: '双向循环链表', link: '/linear/0004' },
        ]
      },
      {
        text: '栈和队列',
        items: [
          { text: '栈的顺序存储结构', link: '/stack/0001' },
          { text: '队列的链式存储结构', link: '/stack/0002' },
          { text: '队列的顺序存储结构', link: '/stack/0003' },
          { text: '栈-进制转换', link: '/stack/0004' },
          { text: '栈-行编辑程序', link: '/stack/0005' },
          { text: '栈-表达式计算', link: '/stack/0006' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
}
