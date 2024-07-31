// 创建一个路由并暴露
import {createRouter, createWebHistory} from "vue-router";
// 引入要呈现的组件
import Home from '@/components/Home.vue'
import News from '@/components/News.vue'
import About from '@/components/About.vue'
// 创建路由器
const router = createRouter({
    // 配置对象
    history: createWebHistory(),    // 指定路由时候一定要指定路由的工作模式
    routes: [   // 一个个的路由规则
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/news',
            component: News,
        },
        {
            path: '/about',
            component: About,
        },
    ]
})

export default router