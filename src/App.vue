<script setup lang="ts">
import type { ConfigProviderTheme } from 'vant'

const theme = computed<ConfigProviderTheme>(() => 'dark')
</script>

<template>
  <div class="w-screen h-screen">
    <van-config-provider :theme="theme" class="w-full h-full">
      <RouterView />
    </van-config-provider>
  </div>
</template>

<style lang="scss"></style>
