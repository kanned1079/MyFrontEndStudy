import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import DashBoard from "@/components/DashBoard.vue";
import Summary from "@/views/Admin/Summary.vue";
import UserLogin from '@/views/Login/UserLogin.vue'
import AdminLogin from "@/views/Admin/Login/AdminLogin.vue";
import QueueMonitor from "@/views/Admin/QueueMonitor.vue";
import SystemConfig from "@/views/Admin/SystemConfig.vue";
import PaymentConfig from "@/views/Admin/PaymentConfig.vue";
import ThemeConfig from "@/views/Admin/ThemeConfig.vue";

import useUserInfoStore from '@/stores/useUserInfoStore'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard,
      meta: {
        requireAuth: true,
      },
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
      path: '/admin/login',
      name: 'admin-login',
      component: AdminLogin
    },
    {
      path: '/login',
      name: 'login',
      component: UserLogin
    }

  ]
})

router.beforeEach(async (to, from) => {
  console.log(to.path, from.path)
  const userInfoStore = useUserInfoStore()
  if ((!userInfoStore.isAuthed && to.name !== 'login')) {
    return { name: 'login'}
  }

});

export default router
