import { computed, onMounted, ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserPreferencesStore = defineStore('user-preferences', () => {
  const darkMode = ref(false)
  const lang = ref('')
  const supportedLangs = ref({
    es: 'Español',
    en: 'English',
  })

  onMounted(() => {
    if(localStorage.getItem('userPreferences')) {
      lang.value = JSON.parse(localStorage.getItem('userPreferences')).lang ?? 'en'
      darkMode.value = JSON.parse(localStorage.getItem('userPreferences')).darkMode ?? false

      localStorage.setItem('userPreferences', JSON.stringify({darkMode: darkMode.value, lang: lang.value}))
    } else {
      const language = (navigator.language || 'en').substring(0, 2)

      lang.value = Object.keys(supportedLangs.value).includes(language) ? language : 'en'
      darkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      localStorage.setItem('userPreferences', JSON.stringify({darkMode: darkMode.value, lang: lang.value}))
    }

  })

  function updateDarkMode() {
    darkMode.value = !darkMode.value
    localStorage.setItem('userPreferences', JSON.stringify({darkMode: darkMode.value, lang: lang.value}))
  }

  function updateLanguage(newLang) {
    lang.value = Object.keys(supportedLangs.value).includes(newLang) ? newLang : lang.value
    localStorage.setItem('userPreferences', JSON.stringify({darkMode: darkMode.value, lang: lang.value}))
  }

  const isDarkModeActivated = computed(() => darkMode.value)
  const currentLanguage = computed(() => supportedLangs.value[lang.value])

  return {
    darkMode,
    supportedLangs,
    updateDarkMode,
    updateLanguage,
    isDarkModeActivated,
    currentLanguage,
  }
})
