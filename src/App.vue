<script setup lang="ts">
import { useGlobalStore } from '@/stores'

const globalStore = useGlobalStore()
const { globalState } = storeToRefs(globalStore)

// themeVars 内的值会被转换成对应 CSS 变量
// 比如 tabbarItemIconMarginBottom 会转换成 `--van-tabbar-item-icon-margin-bottom`
const themeVars = ref({
  tabbarItemIconMarginBottom: '0px',
  navBarBackground: globalState.value.themeColor,
  navBarTitleTextColor: globalState.value.navBarTitleColor,
  navBarIconColor: globalState.value.navBarTitleColor,
})

globalStore.setStatusBar()
</script>

<template>
  <div class="w-screen h-screen">
    <van-config-provider :theme="globalState.theme" :theme-vars="themeVars" class="w-full h-full">
      <RouterView #default="{ Component, route }">
        <div class="w-full h-full flex flex-col bg-[#F7F8FA]">
          <NavBar v-if="!route.meta.ifHideNav" />
          <div class="flex-1">
            <KeepAlive>
              <component :is="Component" />
            </KeepAlive>
          </div>
          <TabBar v-if="route.meta.ifTabbar" />
        </div>
        <!-- <Transition :name="route.meta.transition || 'fade'">
        </Transition> -->
      </RouterView>
    </van-config-provider>
  </div>
</template>

<style lang="scss"></style>
