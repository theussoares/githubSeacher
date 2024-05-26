<script setup>
import { useThemeStore } from '@/stores/store.js';

const themeStore = useThemeStore();
</script>

<template>
  <NuxtLayout>
    <NuxtPage :class="{ 'dark': themeStore.isDarkMode }" :transition="{name: 'page', mode: 'out-in'}" class="overflow-hidden"/>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem)
}
</style>

