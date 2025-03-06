import type { RouteRecordRaw } from 'vue-router'
import { HOME_URL, LOGIN_URL } from '@/config'

export const staticRouters: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: HOME_URL,
  },
  {
    path: HOME_URL,
    name: 'home',
    component: () => import('@/views/home/home.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: LOGIN_URL,
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: '登录',
    },
  },
]
