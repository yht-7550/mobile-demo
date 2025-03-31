import { App as CapacitorApp } from '@capacitor/app'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './routers'
import './tailwind.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(router).use(pinia).mount('#app')

CapacitorApp.addListener('backButton', () => {
  const { meta } = router.currentRoute.value
  if (meta.ifTabbar) {
    // // 强制退出App，不保留后台
    // CapacitorApp.exitApp()
    // 退出App，保留后台
    CapacitorApp.minimizeApp()
  }
  else {
    router.back()
  }
})
