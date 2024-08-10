// import './assets/main.css'
import '~@devui-design/icons/icomoon/devui-icon.css'
import { ThemeServiceInit, infinityTheme, galaxyTheme } from 'devui-theme';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 初始是 infinityTheme 无限主题
const themeService = ThemeServiceInit({ infinityTheme }, 'infinityTheme');
// 可以动态切换成 galaxyTheme 追光主题
themeService?.applyTheme(galaxyTheme);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
