import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../pages/Auth/index.vue'),
    },
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../pages/dashboard/index.vue'),
    },
  ],
})

export default router
