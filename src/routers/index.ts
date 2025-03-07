import { useAuthStore, useGlobalStore } from '@/stores'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { pageRouters } from './modules/staticRouters'

const mode = import.meta.env.VITE_ROUTER_MODE

const routerMode = {
  hash: () => createWebHashHistory(),
  history: () => createWebHistory(),
}

const router = createRouter({
  history: routerMode[mode](),
  routes: [...pageRouters],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

router.beforeEach((to, from, next) => {
  const { globalState } = storeToRefs(useGlobalStore())
  const { menuList, tabBarMenu } = storeToRefs(useAuthStore())
  menuList.value = pageRouters
  if (from.path == '/') {
    const findIndex = tabBarMenu.value.findIndex(e => e.path === to.path)
    if (findIndex > -1) {
      globalState.value.activeTabbarIdx = findIndex
    }
  }

  const title = import.meta.env.VITE_APP_TITLE

  globalState.value.navBarTitle = to.meta.title || ''
  globalState.value.ifTabbar = to.meta.ifTabbar || false
  document.title = to.meta.title ? `${to.meta.title} - ${title}` : ''

  next()
})

export default router
