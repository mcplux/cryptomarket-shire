import { computed, onMounted, ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserPreferencesStore = defineStore('user-preferences', () => {
  const darkMode = ref(false)
  const lang = ref('')
  const supportedLangs = ref(['es', 'en'])

  onMounted(() => {
    if(localStorage.getItem('userPreferences')) {
      lang.value = JSON.parse(localStorage.getItem('userPreferences')).lang ?? 'en'
      darkMode.value = JSON.parse(localStorage.getItem('userPreferences')).darkMode ?? false

      localStorage.setItem('userPreferences', JSON.stringify({darkMode: darkMode.value, lang: lang.value}))
    } else {
      const language = (navigator.language || 'en').substring(0, 2)

      lang.value = supportedLangs.value.includes(language) ? language : 'es'
      darkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      localStorage.setItem('userPreferences', JSON.stringify({darkMode: darkMode.value, lang: lang.value}))
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
