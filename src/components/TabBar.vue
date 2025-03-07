<script setup lang="ts">
import { useGlobalStore, useAuthStore } from '@/stores'

const { globalState } = storeToRefs(useGlobalStore())
const { tabBarMenu } = storeToRefs(useAuthStore())

const themeColor = computed(() => globalState.value.themeColor)
const tabBarList = computed(() => tabBarMenu.value)

const onRouterChange = () => {
  console.log('修改')
}
</script>

<template>
  <div>
    <van-tabbar
      v-model="globalState.activeTabbarIdx"
      :active-color="themeColor"
      fixed
      placeholder
      safe-area-inset-bottom
      @change="onRouterChange"
    >
      <van-tabbar-item
        v-for="(tabbar, index) in tabBarList"
        :key="index"
        replace
        :to="tabbar.path"
        :icon="tabbar.icon"
      >
        <template #icon="props">
          <span
            class="w-6 h-6"
            :class="[tabbar.icon ? `${tabbar.icon}` : '']"
            :style="{
              color: props.active ? themeColor : '#7d7e80'
            }"
          ></span>
        </template>
        {{ tabbar.title }}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped></style>
