import type { AuthState } from '../interface'
import { piniaPersistPrefix } from '@/config'
import { piniaPersistConfig } from '../helper/persist'

export const useAuthStore = defineStore('auth', () => {
  /** 菜单列表 */
  const menuList = ref<AuthState.MenuItem[]>([])

  /** 扁平化菜单列表 */
  const flatMenuList = computed<AuthState.FlatMenu[]>(() => getFlattenMenus())

  /** tabbar 页面 */
  const tabBarMenu = computed<AuthState.TabBarMenu>(() => {
    let menus = []
    if (flatMenuList.value.length) {
      const tabbarMenu = flatMenuList.value.filter(menu => menu.meta && menu.meta.ifTabbar)
      menus = tabbarMenu.map(menu => ({
        path: menu.path,
        name: menu.name || '',
        icon: menu.meta.icon || '',
        title: menu.meta.title || '',
      }))
    }
    return menus
  })

  /** 处理嵌套路由 */
  const getFlattenMenus = () => {
    const flattenMenus: AuthState.FlatMenu[] = []
    const loop = (menuList: AuthState.MenuItem[]) => {
      menuList.forEach((item) => {
        if (item.children) {
          loop(item.children)
        }
        else {
          flattenMenus.push(item)
        }
      })
    }
    loop(menuList.value as AuthState.MenuItem[])
    return flattenMenus
  }

  return { menuList, flatMenuList, tabBarMenu }
}, {
  persist: piniaPersistConfig(`${piniaPersistPrefix}-auth`, {
    pick: ['menuList'],
  }),
})
