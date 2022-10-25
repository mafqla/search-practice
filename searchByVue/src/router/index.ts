import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/search.vue')
    },
    {
      path: '/searchResult',
      name: 'searchResult',
      component: () => import('../views/searchResult.vue')
    }
  ]
})

export default router
