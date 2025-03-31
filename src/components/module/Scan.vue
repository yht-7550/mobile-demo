<script setup lang="ts">
import type { ToastWrapperInstance } from 'vant'
import type { ScanModule } from '../types/Scan'
import { useGlobalStore } from '@/stores'
import { CapacitorBarcodeScanner } from '@capacitor/barcode-scanner'
import { HintSupportedFormats } from '../types/Scan'

const { globalState } = storeToRefs(useGlobalStore())
const scanInfo = ref<string>()
const loadingToast = ref<ToastWrapperInstance>()
const scanConfigOpt = ref<ScanModule.ScanOptions>({
  cameraDirection: 1,
  hint: 17,
})

const handleScan = async () => {
  loadingToast.value && loadingToast.value.close()
  loadingToast.value = null
  const res = await CapacitorBarcodeScanner.scanBarcode({
    ...scanConfigOpt.value,
  })
  scanInfo.value = res.ScanResult
}

const openScan = () => {
  if (globalState.value.devicePlatform !== 'web') {
    loadingToast.value = showLoadingToast({
      message: '调起扫描中...',
      forbidClick: true,
      duration: 0,
    })
    setTimeout(() => {
      handleScan()
    }, 1000)
  }
}
</script>

<template>
  <div class="p-4">
    <div class="mb-4">
      扫码结果：<span v-if="scanInfo">{{ scanInfo }}</span>
    </div>
    <van-button type="primary" block @click="openScan">
      扫码
    </van-button>
    <Card class="mt-4 text-sm">
      <div class="flex">
        <div class="mr-2 shrink-0 w-8">
          摄像
        </div>
        <van-radio-group v-model="scanConfigOpt.cameraDirection" icon-size="16" direction="horizontal">
          <van-radio :name="1">
            前置摄像头
          </van-radio>
          <van-radio :name="2">
            后置摄像头
          </van-radio>
        </van-radio-group>
      </div>
      <div class="flex mt-2">
        <div class="mr-2 shrink-0 w-8">
          扫码类型
        </div>
        <van-radio-group v-model="scanConfigOpt.hint" icon-size="16" direction="horizontal">
          <van-radio v-for="(item, index) in HintSupportedFormats" :key="index" :name="item.value">
            {{ item.name }}
          </van-radio>
        </van-radio-group>
      </div>
    </Card>
  </div>
</template>

<style lang="scss" scoped></style>
