<script setup>
import { useUserPreferencesStore } from '@/stores/userPreferences'
import Header from '@/components/Header.vue'

const userPreferences = useUserPreferencesStore()
</script>

<template>
  <div :class="{'dark': userPreferences.isDarkModeActivated}" class="max-w-screen">
    <div class="bg-gray-200 dark:bg-slate-700 min-h-screen">
      <Header />

      <RouterView />
    </div>
  </div>
</template>
