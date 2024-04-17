// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import { defineAsyncComponent } from 'vue';

export default {
  ...DefaultTheme,

  enhanceApp({ app }) {

    {
      app.component('GoogleAnalytics', defineAsyncComponent(() => import('./GoogleAnalytics.vue')))
    }
    // 添加 MathJax 脚本
    {
      if (typeof window !== 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
        script.async = true;
        document.head.appendChild(script);
      }
    }

  },
}
