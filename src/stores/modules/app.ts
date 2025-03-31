import type { AppInfo } from '../interface'
import { piniaPersistPrefix } from '@/config'
import { App } from '@capacitor/app'
import { piniaPersistConfig } from '../helper/persist'
import { useGlobalStore } from './global'

export const useAppStore = defineStore('app', () => {
  const { globalState } = storeToRefs(useGlobalStore())

  const appInfo = ref<AppInfo>({
    appName: '',
    appVersion: '',
    appPackage: '',
  })

  /** 获取App信息 */
  const getAppInfo = async () => {
    if (globalState.value.devicePlatform === 'web') {
      return
    }
    const { name, id, version } = await App.getInfo()
    appInfo.value.appName = name
    appInfo.value.appVersion = version
    appInfo.value.appPackage = id
  }

  getAppInfo()

  return { appInfo, getAppInfo }
}, {
  persist: piniaPersistConfig(`${piniaPersistPrefix}-global`),
})
