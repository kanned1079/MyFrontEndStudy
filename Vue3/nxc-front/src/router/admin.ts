import { type RouteRecordRaw } from 'vue-router';
import DashBoard from "@/views/Admin/DashBoard.vue";
import Summary from "@/views/Admin/Summary.vue";
import QueueMonitor from "@/views/Admin/QueueMonitor.vue";
import SystemConfig from "@/views/Admin/SystemConfig.vue";
import PaymentConfig from "@/views/Admin/PaymentConfig.vue";
import ThemeConfig from "@/views/Admin/ThemeConfig.vue";
import UserManager from "@/views/Admin/UserManager.vue";
import AdminLogin from "@/views/Admin/Login/AdminLogin.vue";
import UserLogin from "@/views/User/Login/UserLogin.vue";

const adminRoutes: RouteRecordRaw[] = [
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
                component: Summary,
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
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: UserLogin
    // },
    // {
    //     path: '/home',
    //     redirect: '/',
    // },
    // {
    //     path: '/',
    //     redirect: '/login',
    // },
    {
        path: '/admin',
        redirect: '/admin/dashboard',
    }
];

export default adminRoutes;