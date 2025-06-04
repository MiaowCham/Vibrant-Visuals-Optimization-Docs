import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
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
            link: 'https://github.com/MiaowCham/Vibrant-Visuals-Optimization/releases'
          }
        ]
      },
      { text: 'Github', link: 'https://github.com/MiaowCham/Vibrant-Visuals-Optimization'}
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: {
      '/docs/':[
        {
          text: '项目文档',
          items: [
            { text: '项目简介', link: '/docs/' },
            { text: '资源包总览', link: '/docs/resource'},
          ],
        },
      ],
    },
  },
});
