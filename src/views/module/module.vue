<script setup lang="ts">
const route = useRoute()
const type = computed(() => route.query.type || '')
</script>

<template>
  <div class="w-full h-full">
    <Scan v-if="type === 'scan'" />
  </div>
</template>

<style lang="scss" scoped></style>
