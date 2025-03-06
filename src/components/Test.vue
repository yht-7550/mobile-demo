<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
}>(), {
  title: '这是一个测试页面',
})
</script>

<template>
  <div class="container">
    <div>{{ title }}</div>
    <div class="flex justify-center items-center">
      <span class="icon-[material-symbols--drag-pan-rounded] text-blue-500" />
      可拖动的
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background: #e6e6e6;
}
</style>
