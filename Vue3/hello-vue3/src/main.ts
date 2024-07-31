import { createApp } from "vue";
import App from './App.vue'

// 引入路由组件
import router from '@/router'
// 创建一个应用
const app = createApp(App)

// 使用路由组件
app.use(router)

// 在最后进行挂载
app.mount('#app')