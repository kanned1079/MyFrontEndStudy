import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import DashBoard from "@/views/Admin/DashBoard.vue";
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
      meta: {
        requireAuth: true,
      },
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
      path: '/dashboard',
      component: DashBoard,
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
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/admin',
      redirect: '/admin/dashboard',
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userInfoStore = useUserInfoStore()
  console.log(userInfoStore.isAuthed)
  if (to.meta.requiresAuth && !userInfoStore.isAuthed) {// 判断用户是否已登录
    next('/admin/login'); // 跳转到登录页
  } else {
    next(); // 放行
  }
});

// router.beforeEach(async (to, from) => {
//   console.log(from.path, to.path)
//
//   const userInfoStore = useUserInfoStore()
//   console.log('鉴权状态', userInfoStore.isAuthed)
//   if (userInfoStore.isAuthed) {
//     if (to.path !== '/admin/dashboard') {
//       return {path: '/admin/dashboard'}
//     }
//
//   } else {
//
//   }
//   //
//   // if (userInfoStore.isAuthed) {
//   //   console.log('允许访问')
//   // if (userInfoStore.isAuthed) {
//   //   console.log('允许访问')
//   //   console.log('用户角色是否是管理员', userInfoStore.thisUser.isAdmin)
//   //   if (userInfoStore.thisUser.isAdmin && to.path !== '/admin/dashboard') {
//   //     console.log('前往管理员面板')
//   //     return {
//   //       path: '/admin/dashboard'
//   //     }
//   //   } else {
//   //     console.log('非管理员')
//   //     return {
//   //       path: '/admin/login'
//   //     }
//   //   }
//   // } else {
//   //   console.log('禁止访问')
//   //   // return {
//   //   //   path: '/login'
//   //   // }
//   // }
//   //   console.log('用户角色是否是管理员', userInfoStore.thisUser.isAdmin)
//   //   if (userInfoStore.thisUser.isAdmin && to.path !== '/admin/dashboard') {
//   //     console.log('前往管理员面板')
//   //     return {
//   //       path: '/admin/dashboard'
//   //     }
//   //   } else {
//   //     console.log('非管理员')
//   //     return {
//   //       path: '/admin/login'
//   //     }
//   //   }
//   // } else {
//   //   console.log('禁止访问')
//   //   // return {
//   //   //   path: '/login'
//   //   // }
//   // }
// });

export default router
