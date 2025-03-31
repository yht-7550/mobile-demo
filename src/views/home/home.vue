<script setup lang="ts"></script>

<template>
  <div class="w-full h-full p-4">
    <div class="text-center font-bold mb-4">
      Android 功能模块
    </div>
    <van-form>
      <van-cell-group inset>
        <van-cell title="扫码" is-link :to="{ path: '/module/module', query: { type: 'scan' } }" />
      </van-cell-group>
    </van-form>
  </div>
</template>

<style lang="scss" scoped></style>
