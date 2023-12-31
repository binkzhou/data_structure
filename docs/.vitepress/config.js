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
        text: '基础知识',
        items: [
          { text: '预处理与条件编译', link: '/base/0001' },
          { text: '内存管理', link: '/base/0002' },
          { text: '结构体', link: '/base/0003' },
          { text: '共用体', link: '/base/0008' },
          { text: '指针', link: '/base/0004' },
          { text: '函数', link: '/base/0005' },
          { text: '数组', link: '/base/0006' },
          { text: '常用标准库函数', link: '/base/0007' },
        ]
      },
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
      {
        text: '串',
        items: [
          { text: '串的定长顺序存储表示', link: '/sstring/0001' },
          { text: '串的堆分配存储表示', link: '/sstring/0002' },
          { text: '串的块链分配存储表示', link: '/sstring/0003' },
          { text: 'KMP算法', link: '/sstring/0004' },
        ]
      },
      {
        text: '数组和广义表',
        items: [
          { text: '多维数组', link: '/array/0001' },
          { text: '稀疏矩阵-三元组顺序表', link: '/array/0002' },
          { text: '稀疏矩阵-行逻辑链接的顺序表', link: '/array/0003' },
          { text: '稀疏矩阵-十字链表', link: '/array/0004' },
          { text: '广义表-头尾链表存储表示', link: '/array/0005' },
          { text: '广义表-扩展线性链表存储表示', link: '/array/0006' },
        ]
      },
      {
        text: '树',
        items: [
          { text: '树与二叉树', link: '/tree/0001' },
          { text: '二叉树-顺序存储结构', link: '/tree/0002' },
          { text: '二叉树-二叉链存储结构', link: '/tree/0003' },
          { text: '二叉树-三叉链存储结构', link: '/tree/0004' },
          { text: '二叉树-线索二叉树', link: '/tree/0005' },
          { text: '树-双亲表示法', link: '/tree/0006' },
          // { text: '树-孩子表示法', link: '/tree/0007' },
          // { text: '树-孩子兄弟表示法', link: '/tree/0008' },
          // { text: '集合', link: '/tree/0009' },
          { text: '赫夫曼树', link: '/tree/0010' },
          { text: '幂集', link: '/tree/0011' },
          { text: 'N 皇后问题', link: '/tree/0012' },
        ]
      },
      {
        text: '图',
        items: [
          { text: '图的存储结构-数组表示', link: '/graph/0001' },
          { text: '图的存储结构-邻接表表示', link: '/graph/0002' },
          { text: '图的存储结构-十字链表表示', link: '/graph/0003' },
          { text: '图的存储结构-邻接多重表表示', link: '/graph/0004' },
          { text: '无向图的生成树', link: '/graph/0005' },
          { text: '无向网的最小生成树', link: '/graph/0006' },
          { text: '拓扑排序-AOV-网', link: '/graph/0007' },
          { text: '拓扑排序-AOE-网', link: '/graph/0008' },
          { text: '最短路径算法', link: '/graph/0009' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    math: true
  }
}
