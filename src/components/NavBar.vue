<script setup lang="ts">
import router from '@/routers'
import { useGlobalStore } from '@/stores'

const globalStore = useGlobalStore()
const { globalState } = storeToRefs(globalStore)

const goBack = () => {
  router.back()
}
</script>

<template>
  <div>
    <van-nav-bar
      :title="globalState.navBarTitle"
      :left-arrow="!globalState.ifTabbar"
      safe-area-inset-top
      fixed
      placeholder
      @click-left="goBack"
    />
  </div>
</template>

<style lang="scss" scoped></style>
