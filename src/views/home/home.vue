<script setup lang="ts">
import { Device } from '@capacitor/device'

const deviceInfo = ref()

const getDeviceInfo = async () => {
  deviceInfo.value = await Device.getInfo()
}
</script>

<template>
  <div class="w-full h-full">
    <van-button type="primary" size="small" @click="getDeviceInfo">
      获取设备信息
    </van-button>
    <div>
      {{ deviceInfo }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
