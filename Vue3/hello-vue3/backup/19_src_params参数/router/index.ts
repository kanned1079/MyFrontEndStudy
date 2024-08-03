// 创建一个路由并暴露
import {createRouter, createWebHashHistory} from "vue-router";
// 引入要呈现的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'
// 创建路由器
const router = createRouter({
    // 配置对象
    history: createWebHashHistory(),    // 指定路由时候一定要指定路由的工作模式
    routes: [   // 一个个的路由规则
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'xiang',
                    // 使用params传参 需要进行占位 '?'表示此参数不是必要的
                    path: 'detail/:id/:title/:content?',
                    component: Detail,
                }
            ]
        },
        {
            name: 'gyuanyu',
            path: '/about',
            component: About,
        },
    ]
})

export default router