<script setup lang="ts">
import { Device } from '@capacitor/device'
import { Haptics } from '@capacitor/haptics'

const deviceInfo = ref()

const getDeviceInfo = async () => {
  Haptics.vibrate()
  deviceInfo.value = await Device.getInfo()
}
</script>

<template>
  <div class="w-full h-full flex-center flex-col">
    <van-button type="primary" size="small" @click="getDeviceInfo">
      获取设备信息
    </van-button>
    <div>
      {{ deviceInfo }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
