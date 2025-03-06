<script setup lang="ts">
const activeIndex = ref(0)
</script>

<template>
  <div>
    <van-tabbar v-model="activeIndex">
      <van-tabbar-item>
        <template #icon>
          <span />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped></style>
