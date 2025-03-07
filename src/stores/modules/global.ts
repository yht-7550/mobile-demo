import type { GlobalState } from '../interface'
import { piniaPersistPrefix } from '@/config'
import { piniaPersistConfig } from '../helper/persist'

export const useGlobalStore = defineStore('global', () => {
  const globalState = ref<GlobalState>({
    /** 主题风格 */
    theme: 'light',
    /** 主题色/navBar背景颜色 */
    themeColor: '#1161FE',
    /** 导航栏文字 */
    navBarTitle: '',
    navBarTitleColor: '#ffffff',
    /** 是否 tabbar 页面 */
    ifTabbar: false,
    /** 当前 tabbar 下标 */
    activeTabbarIdx: 0,
  })

  return { globalState }
}, {
  persist: piniaPersistConfig(`${piniaPersistPrefix}-global`),
})
