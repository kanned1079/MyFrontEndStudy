import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import DashBoard from "@/components/DashBoard.vue";
import Summary from "@/views/Summary.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Summary
    },
    {
      path: '/summary',
      name: 'summary',
      component: Summary
    }

  ]
})

export default router
