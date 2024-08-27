import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import DashBoard from "@/components/DashBoard.vue";
import Summary from "@/views/Summary.vue";
import UserLogin from '@/views/Login/UserLogin.vue'
import QueueMonitor from "@/views/QueueMonitor.vue";
import SystemConfig from "@/views/SystemConfig.vue";
import PaymentConfig from "@/views/PaymentConfig.vue";
import ThemeConfig from "@/views/ThemeConfig.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard,
      children: [
        {
          path: '/dashboard/summary',
          name: 'summary',
          component: Summary
        },
        {
          path: '/dashboard/monitor',
          name: 'monitor',
          component: QueueMonitor
        },
        {
          path: '/dashboard/systemconfig',
          name: 'systemconfig',
          component: SystemConfig,
        },
        {
          path: '/dashboard/payment',
          name: 'payment',
          component: PaymentConfig,
        },
        {
          path: '/dashboard/theme',
          name: 'theme',
          component: ThemeConfig,
        }

      ]
    },

    {
      path: '/login',
      name: 'login',
      component: UserLogin
    }

  ]
})

export default router
