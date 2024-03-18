<script setup>
import { useUserPreferencesStore } from '@/stores/userPreferences'
import SunIcon from './icons/SunIcon.vue'
import MoonIcon from './icons/MoonIcon.vue'
import { useCryptosStore } from '@/stores/cryptos'
import LanguageOptions from './LanguageOptions.vue'

const userPreferences = useUserPreferencesStore()
const cryptos = useCryptosStore()
</script>

<template>
  <header class="bg-blue-500 dark:bg-slate-900 p-5 md:py-5 md:px-20 shadow-lg">
    <div class="flex justify-between text-gray-200 container mx-auto">
      <button @click="cryptos.returnHome" class="text-2xl font-bold">CryptoMarketShire</button>
      
      <div class="flex gap-3 items-center">
        <LanguageOptions />
        <button @click="userPreferences.updateDarkMode">
          <SunIcon v-if="userPreferences.isDarkModeActivated" />
          <MoonIcon v-else />
        </button>
      </div>
    </div>
  </header>
</template>
