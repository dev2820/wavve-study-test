import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path:'/',
        name: 'Home',
        component: () => import('@/pages/HomePage.vue')
    },
    {
        path:'/result',
        name: 'Result',
        component: () => import('@/pages/ResultPage.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})