/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

// import { useUserStore } from '@/store/user';



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
        }, {
          path: '/404',
          component: () => import('@/pages/NotFound.vue')
        }, {
          path: '/chartdemo',
          component: () => import('@/components/ChartDemo.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/pages/Login.vue')
    },
    {
      path: '/student',
      component: () => import('@/pages/student/Frame.vue')
    }
  ]
})



router.beforeEach((to, from, next) => {
  const loginState = sessionStorage.isLoggedin;
  if (loginState === 'true') {// 已登录
    if (to.path === '/login') {
      next({ component: () => { import('@/pages/Home.vue') } });// 重复登录跳转到主页
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
