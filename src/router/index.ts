import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
    {
        path:'/',
        component: () => import('@/pages/HomePage.vue')
    },
    {
        path:'/result',
        component: () => import('@/pages/ResultPage.vue')
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})