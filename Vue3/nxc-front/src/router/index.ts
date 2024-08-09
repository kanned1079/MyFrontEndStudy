import {createRouter, createWebHashHistory} from 'vue-router'
import UserManager from "@/views/UserManager.vue";
import AdminLobby from "@/views/AdminLobby.vue";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'lobby',
            component: AdminLobby,
        },
        {
            path: '/cockpit',
            name: 'cockpit',
            component: AdminLobby,
        }
    ]
})

export default router