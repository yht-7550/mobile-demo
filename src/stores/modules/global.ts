import type { StatusBarInfo } from '@capacitor/status-bar'
import type { GlobalState } from '../interface'
import { piniaPersistPrefix } from '@/config'
import { Device } from '@capacitor/device'
import { StatusBar } from '@capacitor/status-bar'
// import { EdgeToEdge } from '@capawesome/capacitor-android-edge-to-edge-support'
import { piniaPersistConfig } from '../helper/persist'

export const useGlobalStore = defineStore('global', () => {
  const globalState = ref<GlobalState>({
    devicePlatform: null,
    theme: 'light',
    themeColor: '#1161FE',
    navBarTitle: '',
    navBarTitleColor: '#ffffff',
    ifTabbar: false,
    activeTabbarIdx: 0,
  })

  const statusBarInfo = ref<StatusBarInfo>()
  const statusMsg = ref()
  /** 设置状态栏 */
  const setStatusBar = async () => {
    const { platform } = await Device.getInfo()
    globalState.value.devicePlatform = platform
    if (platform !== 'web') {
      // await EdgeToEdge.setBackgroundColor({ color: '#ffffff' })
      // await StatusBar.setOverlaysWebView({ overlay: false })
      try {
        await StatusBar.setBackgroundColor({ color: globalState.value.themeColor })
        statusBarInfo.value = await StatusBar.getInfo()
      }
      catch (error) {
        statusMsg.value = error
        console.error('设置状态栏颜色失败:', error)
      }
    }
  }

  return { globalState, setStatusBar, statusBarInfo, statusMsg }
}, {
  persist: piniaPersistConfig(`${piniaPersistPrefix}-global`),
})
