import { defineConfig } from 'vitepress'
import nav from './nav.mts'
import sidebar from './sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Help Documents",
  description: "For MMC staffs internal using",
  srcDir:'docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav,
    search:{
    provider: 'local'
    },
    sidebar: { ...sidebar } as any,
    footer: {
      copyright:'MMC Wellness Group@2024'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  
})
