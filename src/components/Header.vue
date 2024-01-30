<script setup>
import { useDarkModeStore } from '@/stores/darkMode'
import SunIcon from './icons/SunIcon.vue'
import MoonIcon from './icons/MoonIcon.vue'

const darkMode = useDarkModeStore()
</script>

<template>
  <header class="bg-blue-500 dark:bg-slate-900 p-5 md:py-5 md:px-20 shadow-lg">
    <div class="flex justify-between text-gray-200 container mx-auto">
      <RouterLink :to="{name: 'home'}" class="text-2xl font-bold">CryptoMarket</RouterLink>
      
      <button @click="darkMode.updateDarkMode">
        <SunIcon v-if="darkMode.isActived" />
        <MoonIcon v-else />
      </button>
    </div>
  </header>
</template>
