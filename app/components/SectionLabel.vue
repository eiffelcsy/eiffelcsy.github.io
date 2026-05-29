<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <p class="section__label">{{ label }}</p>
</template>
