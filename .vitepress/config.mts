import { defineConfig } from 'vitepress'
import { navConfig } from './nav.mts'; // 注意这里改为导入 navConfig
import sidebar from './sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir:'docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '/logo.png',
    i18nRouting: true,
    nav: navConfig['en'], // 默认为英文导航
    search:{
    provider: 'local'
    },
    sidebar: { ...sidebar } as any,
    footer: {
      copyright:'CopyRight Borui Education@2024'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "Young Explorers' Hub",
      description: "A curated learning adventure for curious young minds.",
      themeConfig: {
        nav: navConfig['en'],
      },
    },
    zh: {
      label: '中文',
      lang: 'zh',
      link: '/zh',
      title: "小探索者之家",
      description: "为好奇的年轻心灵量身定制的学习冒险。",
      themeConfig: {
        nav: navConfig['zh'],
      },
    }
  }
})
