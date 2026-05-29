<script setup lang="ts">
const route = useRoute()

const navLinks = [
  { href: '/#about', label: 'about' },
  { href: '/#research', label: 'research' },
  { href: '/#publications', label: 'publications' },
  { href: '/#blog', label: 'blog' },
  { href: '/#contact', label: 'contact' },
]
</script>

<template>
  <header class="header" aria-label="site header">
    <div class="header__inner">
      <NuxtLink class="brand" href="/" aria-label="home">
        <span class="brand__path">~/</span><span>eiffel-chong</span>
      </NuxtLink>
      <nav class="nav" aria-label="primary">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
        >
          {{ link.label }}
        </NuxtLink>
        <ThemeToggle />
      </nav>
    </div>
  </header>
</template>
