<script setup lang="ts">
const { tweaks, setTweak } = useTweaks()

const isDark = computed(() => tweaks.value.theme === 'dark')

function toggle() {
  setTweak('theme', isDark.value ? 'light' : 'dark')
}
</script>

<template>
  <button
    class="theme-toggle"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="isDark ? 'light' : 'dark'"
    @click="toggle"
  >
    <span class="theme-toggle__glyph">{{ isDark ? '☀' : '☾' }}</span>
  </button>
</template>
