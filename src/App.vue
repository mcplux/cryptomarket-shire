<script setup>
import { useDarkModeStore } from '@/stores/darkMode'
import Header from '@/components/Header.vue'

const darkMode = useDarkModeStore()
</script>

<template>
  <div :class="{'dark': darkMode.isActived}" class="max-w-screen">
    <div class="bg-gray-200 dark:bg-slate-700 min-h-screen">
      <Header />

      <RouterView />
    </div>
  </div>
</template>
