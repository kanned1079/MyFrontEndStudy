import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import DashBoard from "@/components/DashBoard.vue";
import Summary from "@/views/Admin/Summary.vue";
import UserLogin from '@/views/User/Login/UserLogin.vue'  // 普通用户的登录窗口
import AdminLogin from "@/views/Admin/Login/AdminLogin.vue";  // 管理员的登录窗口
import QueueMonitor from "@/views/Admin/QueueMonitor.vue";
import SystemConfig from "@/views/Admin/SystemConfig.vue";
import PaymentConfig from "@/views/Admin/PaymentConfig.vue";
import ThemeConfig from "@/views/Admin/ThemeConfig.vue";
import UserManager from "@/views/Admin/UserManager.vue";

import useUserInfoStore from '@/stores/useUserInfoStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin/dashboard',
      name: 'admin-dashboard',
      component: DashBoard,
      // meta: {
      //   requireAuth: true,
      // },
      children: [
        {
          path: '/admin/dashboard/summary',
          name: 'summary',
          component: Summary
        },
        {
          path: '/admin/dashboard/monitor',
          name: 'monitor',
          component: QueueMonitor
        },
        {
          path: '/admin/dashboard/systemconfig',
          name: 'system-config',
          component: SystemConfig,
        },
        {
          path: '/admin/dashboard/payment',
          name: 'payment',
          component: PaymentConfig,
        },
        {
          path: '/admin/dashboard/theme',
          name: 'theme',
          component: ThemeConfig,
        },
        {
          path: '/admin/dashboard/node',
          name: 'node',
          component: ThemeConfig,
        },

        // part4
        {
          path: '/admin/dashboard/usermanager',
          name: 'user-manager',
          component: UserManager,
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
    },
    // {
    //   path: '/',
    //   name: 'login',
    //   component: UserLogin,
    // }
    {
      path: '/',
      redirect: { path: '/login'}
    },
    {
      path: '/admin',
      redirect: { path: '/admin/login'}
    }
  ]
})

router.beforeEach(async (to, from) => {
  // console.log(from.path, ' ->', to.path)
  // if (to.path === '/')
  //   return { path: '/login'}
  //
  // if (to.path === '/admin' )
  //   return { path: '/admin/login' }

  const userInfoStore = useUserInfoStore()
  if (!userInfoStore.isAuthed && to.path !== '/admin/login') {
    return { path: '/admin/login'}
  }
});

export default router
