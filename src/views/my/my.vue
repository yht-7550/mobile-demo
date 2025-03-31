<script setup lang="ts">
import { useAppStore } from '@/stores'

const appStore = useAppStore()
const { appInfo } = storeToRefs(appStore)
</script>

<template>
  <div class="p-4">
    <div class="text-center">
      <van-image
        width="5rem"
        height="5rem"
        round
        fit="cover"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
    </div>
    <van-cell-group inset class="!mt-4">
      <van-cell title="应用版本" :value="appInfo.appVersion" />
    </van-cell-group>
  </div>
</template>

<style lang="scss" scoped></style>
