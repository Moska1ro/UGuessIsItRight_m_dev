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
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/pages/Login.vue')
    },
    {
      path: '/teacher',
      component: () => import('@/pages/teacher/Frame.vue'),
      beforeEnter: () => {
        if (sessionStorage.isLoggedin === 'true') {
          if (sessionStorage.role !== '0') {
            useUserStore().logout();
            return { path: '/login' }
          }
        }
      },
      children: [
        {
          path: '',
          component: () => import('@/pages/teacher/Home.vue'),
          meta: {
            name: 'home'
          }
        },
        {
          path: 'myquestionset',
          component: () => import('@/pages/teacher/MyQuestionSet.vue'),
          meta: {
            name: 'myquestionset'
          }
        },
        {
          path: 'assignmentset',
          component: () => import('@/pages/teacher/AssignmentSet.vue'),
          meta: {
            name: 'assignmentset'
          }
        }, {
          path: 'gradeanalysis',
          component: () => import('@/pages/teacher/GradeAnalysis.vue'),
          meta: {
            name: 'gradeanalysis'
          }
        }, {
          path: 'smartqa',
          component: () => import('@/pages/teacher/SmartQA.vue'),
          meta: {
            name: 'smartqa'
          }
        }
      ]
    },
    {
      path: '/student',
      component: () => import('@/pages/student/Frame.vue'),
      beforeEnter: () => {
        if (sessionStorage.isLoggedin === 'true') {
          if (sessionStorage.role !== '1') {
            useUserStore().logout();
            return { path: '/login' }
          }
        }
      },
      children: [
        {
          path: '',
          component: () => import('@/pages/student/course/Home.vue'),
          meta: {
            name: 'course'
          }
        },
        {
          path: 'course/:courseId',
          component: () => import('@/pages/student/course/Course.vue'),
          meta: {
            name: 'course'
          }
        },
        {
          path: 'assignment',
          component: () => import('@/pages/student/Assignment.vue'),
          meta: {
            name: 'assignment'
          }
        },
        {
          path: 'question',
          component: () => import('@/pages/student/Question.vue'),
          meta: {
            name: 'question'
          }
        },
        {
          path: 'star',
          component: () => import('@/pages/student/Star.vue'),
          meta: {
            name: 'star'
          }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/NotFound.vue')
    }
  ]
})



router.beforeEach(async (to, from) => {// 1 未登录重定向到登录页
  if (sessionStorage.isLoggedin === 'false' && to.path !== '/login') {// 避免无限重定向,将用户重定向到登录页面
    return { path: '/login' };
  }
})

router.beforeEach(async (to, from) => {// 2 已登录，再次login则定向到当前主页
  if (sessionStorage.isLoggedin === 'true' && to.path === '/login') {
    return { path: useUserStore().getSessionRole };
  }
})

export default router
