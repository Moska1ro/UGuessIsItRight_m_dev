/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

import { useUserStore } from '@/store/user';



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



router.beforeEach((to, from, next) => {
  const userInfo = useUserStore()
  if (userInfo.isLoggedin === true) {// 已登录
    if (to.path === '/login') {
      next({ path: '/' });// 重复登录跳转到主页
    }
    else next();// 放行
  } else {
    if (to.path === '/login') {// 未登录则判断是否为登录页
      next();
    }
    else {
      next({ path: '/login' });// 强制跳转
    }
  }
})
export default router
