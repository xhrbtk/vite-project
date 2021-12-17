
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

// 路由配置
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            type: 'home'
        },
        component: () => import('@/pages/home.vue'),
        children: [
            {
                path: '/about',
                name: 'about',
                component: () => import('@/pages/about.vue')
            },
            {
                path: '/test',
                name: 'test',
                component: () => import('@/pages/test.vue')
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            type: 'login'
        },
        component: () => import('@/pages/login.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/pages/404.vue'),
    }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router