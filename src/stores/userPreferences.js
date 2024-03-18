import { computed, onMounted, ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserPreferencesStore = defineStore('user-preferences', () => {
  const darkMode = ref(false)

  onMounted(() => {
    if(localStorage.getItem('userPreferences')) {
      darkMode.value = JSON.parse(localStorage.getItem('userPreferences')).darkMode ?? false
    } else {
      darkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      localStorage.setItem('userPreferences', JSON.stringify({darkMode: darkMode.value}))
    }

  })

  function updateDarkMode() {
    darkMode.value = !darkMode.value
    localStorage.setItem('userPreferences', JSON.stringify({darkMode: darkMode.value}))
  }

  const isDarkModeActivated = computed(() => darkMode.value)

  return {
    darkMode,
    updateDarkMode,
    isDarkModeActivated,
  }
})
