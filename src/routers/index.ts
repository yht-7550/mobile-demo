import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { staticRouters } from './modules/staticRouters'

const mode = import.meta.env.VITE_ROUTER_MODE

const routerMode = {
  hash: () => createWebHashHistory(),
  history: () => createWebHistory(),
}

const router = createRouter({
  history: routerMode[mode](),
  routes: [...staticRouters],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export default router
