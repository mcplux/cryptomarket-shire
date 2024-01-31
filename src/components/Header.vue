<script setup>
import { useDarkModeStore } from '@/stores/darkMode'
import SunIcon from './icons/SunIcon.vue'
import MoonIcon from './icons/MoonIcon.vue'
import { useCryptosStore } from '@/stores/cryptos'

const darkMode = useDarkModeStore()
const cryptos = useCryptosStore()
</script>

<template>
  <header class="bg-blue-500 dark:bg-slate-900 p-5 md:py-5 md:px-20 shadow-lg">
    <div class="flex justify-between text-gray-200 container mx-auto">
      <button @click="cryptos.returnHome" class="text-2xl font-bold">CryptoMarketShire</button>
      
      <button @click="darkMode.updateDarkMode">
        <SunIcon v-if="darkMode.isActived" />
        <MoonIcon v-else />
      </button>
    </div>
  </header>
</template>
