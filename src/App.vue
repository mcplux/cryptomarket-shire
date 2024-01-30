<script setup>
import { useDarkModeStore } from '@/stores/darkMode'

const darkMode = useDarkModeStore()
</script>

<template>
  <div :class="{'dark': darkMode.isActived}">
    <div class="bg-gray-200 dark:bg-slate-700 min-h-screen">
      

      <RouterView />
    </div>
  </div>
</template>
