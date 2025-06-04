import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Vibrant Visuals Optimization',
  description: 'Minecraft 基岩版动态视觉效果优化资源包',
  base: '/Vibrant-Visuals-Optimization-Docs/', // GitHub Pages repository name

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目文档', link: '/docs/' },
      {
        text: '下载地址',
        items:[
          {
            text: '下载最新构建版',
            link: 'https://github.com/MiaowCham/Vibrant-Visuals-Optimization/actions/workflows/compress-folders.yml'
          },
          {
            text: '下载稳定发行版',
            link: 'https://github.com/MiaowCham/Vibrant-Visuals-Optimization/releases/latest'
          }
        ]
      },
      {
        text: 'Github',
        items:[
          {
            text: 'Vibrant Visuals Optimization',
            link: 'https://github.com/MiaowCham/Vibrant-Visuals-Optimization/'
          },
          {
            text: 'Vibrant Visuals Optimization Docs',
            link: 'https://github.com/MiaowCham/Vibrant-Visuals-Optimization-Docs/'
          }
        ]
      },
    ],

    sidebar: {
      '/docs/':[
        {
          text: '项目文档',
          items: [
            { text: '项目简介', link: '/docs/' },
            { text: '资源包总览', link: '/docs/resource'},
            { text: '如何使用', link: '/docs/howtouse'},
          ],
        },
      ],
    },
  },
});
