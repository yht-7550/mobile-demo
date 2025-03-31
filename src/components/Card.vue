<script setup lang="ts">
withDefaults(defineProps<{
  showShadow?: boolean
}>(), {
  showShadow: true,
})
</script>

<template>
  <div
    class="card p-4 border bg-white border-[#ebeef5] rounded-sm"
    :class="[showShadow ? 'box-shadow' : '']"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.box-shadow {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
