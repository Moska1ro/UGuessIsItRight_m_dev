/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/Frame.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/pages/Home.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/pages/Login.vue')
    }
  ]
})

export default router
