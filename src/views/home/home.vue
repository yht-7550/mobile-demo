<script setup lang="ts">
import { useGlobalStore } from '@/stores'
import { Device } from '@capacitor/device'
import { Haptics } from '@capacitor/haptics'
import { ScreenOrientation } from '@capacitor/screen-orientation'

const { globalState, statusBarInfo, statusMsg } = storeToRefs(useGlobalStore())

const deviceInfo = ref()

const getDeviceInfo = async () => {
  Haptics.vibrate()
  deviceInfo.value = await Device.getInfo()
}

const screenOrientationType = ref<OrientationType>()
const getScreenOrientationType = async () => {
  const { type } = await ScreenOrientation.orientation()
  screenOrientationType.value = type
  ScreenOrientation.addListener('screenOrientationChange', ({ type }) => {
    screenOrientationType.value = type
  })
}

getScreenOrientationType()
</script>

<template>
  <div class="w-full h-full flex-center flex-col">
    <div class="mb-8">
      {{ globalState.themeColor }}
    </div>
    <div class="w-4/5 mb-8">
      状态栏信息：<span class="font-bold">{{ statusBarInfo }}</span>
    </div>
    <div class="w-4/5 mb-8">
      状态栏设置：<span class="font-bold">{{ statusMsg }}</span>
    </div>
    <div class="mb-8">
      设备类型：<span class="font-bold">{{ globalState.devicePlatform }}</span>
    </div>
    <div class="mb-8">
      屏幕方向： <span class="font-bold">{{ screenOrientationType }}</span>
    </div>
    <van-button type="primary" size="small" @click="getDeviceInfo">
      获取设备信息
    </van-button>
    <div class="w-4/5 mt-8">
      {{ deviceInfo }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
