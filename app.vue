<template>
  <div :class="{ 'dark': themeStore.isDarkMode }"> 
    <div class="bg-primaryBlueLight dark:bg-primaryBlueDark min-h-screen flex flex-col justify-center items-center font-sans">
      <MainPage class="w-full flex flex-col justify-center items-center gap-10"/>
    </div>
  </div>
</template>

<script setup>
import MainPage from '@/components/MainPage.vue'
import { useThemeStore } from '@/stores/store.js';

const themeStore = useThemeStore();
</script>
