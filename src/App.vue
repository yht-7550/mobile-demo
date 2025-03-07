<script setup lang="ts">
import { useGlobalStore } from '@/stores'

const { globalState } = storeToRefs(useGlobalStore())

// themeVars 内的值会被转换成对应 CSS 变量
// 比如 tabbarItemIconMarginBottom 会转换成 `--van-tabbar-item-icon-margin-bottom`
const themeVars = ref({
  tabbarItemIconMarginBottom: '0px',
  navBarBackground: globalState.value.themeColor,
  navBarTitleTextColor: globalState.value.navBarTitleColor,
})
</script>

<template>
  <div class="w-screen h-screen">
    <van-config-provider :theme="globalState.theme" :theme-vars="themeVars" class="w-full h-full">
      <div class="flex flex-col w-full h-full">
        <NavBar />
        <div class="flex-1">
          <RouterView #default="{ Component, route }">
            <KeepAlive>
              <component :is="Component" />
            </KeepAlive>
            <!-- <Transition :name="route.meta.transition || 'fade'">
            </Transition> -->
          </RouterView>
        </div>
        <TabBar />
      </div>
    </van-config-provider>
  </div>
</template>

<style lang="scss"></style>
