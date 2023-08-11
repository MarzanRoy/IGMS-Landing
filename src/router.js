import { createRouter, createWebHistory } from "vue-router/dist/vue-router";

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: () => import('./components/HomeView.vue'),
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./components/AboutUsView.vue'),
    },
    {
        path: '/help',
        name: 'help',
        component: () => import('./components/HelpView.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;