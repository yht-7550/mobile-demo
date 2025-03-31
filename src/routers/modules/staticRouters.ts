import type { RouteRecordRaw } from 'vue-router'

export const pageRouters: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home/home',
  },
  {
    path: '/home/home',
    name: 'home',
    component: () => import('@/views/home/home.vue'),
    meta: {
      title: '首页',
      ifTabbar: true,
      icon: 'icon-[material-symbols--home-app-logo]',
      transition: 'slide-right',
    },
  },
  {
    path: '/login/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: '登录',
      ifTabbar: false,
      icon: '',
      transition: 'slide-right',
    },
  },
  {
    path: '/my/my',
    name: 'my',
    component: () => import('@/views/my/my.vue'),
    meta: {
      title: '我的',
      ifTabbar: true,
      icon: 'icon-[material-symbols--account-box-outline]',
      transition: 'slide-right',
    },
  },
  {
    path: '/module/module',
    name: 'module',
    component: () => import('@/views/module/module.vue'),
    meta: {
      title: '模块',
      ifTabbar: false,
      ifHideNav: false,
    },
  },
]
