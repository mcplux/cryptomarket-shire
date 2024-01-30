import { computed, onMounted, ref } from 'vue'
import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('dark-mode', () => {
  const dark = ref(false)

  onMounted(() => {
    if(localStorage.getItem('userPreferences')) {
      dark.value = JSON.parse(localStorage.getItem('userPreferences')).darkMode
    } else {
      dark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      localStorage.setItem('userPreferences', JSON.stringify({darkMode: dark.value}))
    }

  })

  function updateDarkMode() {
    dark.value = !dark.value
    localStorage.setItem('userPreferences', JSON.stringify({darkMode: dark.value}))
  }

  const isActived = computed(() => dark.value)

  return {
    dark,
    updateDarkMode,
    isActived,
  }
})
