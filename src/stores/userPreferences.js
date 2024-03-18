import { computed, onMounted, ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserPreferencesStore = defineStore('user-preferences', () => {
  const darkMode = ref(false)
  const language = ref('')
  const lang = ({})
  const supportedLangs = ref({
    en: 'English',
  })

  onMounted(() => {
    if(localStorage.getItem('userPreferences')) {
      language.value = JSON.parse(localStorage.getItem('userPreferences')).lang ?? 'en'
      importLanguage()

      darkMode.value = JSON.parse(localStorage.getItem('userPreferences')).darkMode ?? false
      localStorage.setItem('userPreferences', JSON.stringify({darkMode: darkMode.value, lang: language.value}))
    } else {
      const language = (navigator.language || 'en').substring(0, 2)
      language.value = Object.keys(supportedLangs.value).includes(language) ? language : 'en'
      importLanguage()

      darkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches

      localStorage.setItem('userPreferences', JSON.stringify({darkMode: darkMode.value, lang: language.value}))
    }
  })

  function importLanguage() {
    fetch(`locale/${language.value}.json`)
      .then(response => response.json())
      .then(data => lang.value = data)
      .catch(err => console.error(err))
  }

  function updateDarkMode() {
    darkMode.value = !darkMode.value
    localStorage.setItem('userPreferences', JSON.stringify({darkMode: darkMode.value, lang: language.value}))
  }

  function updateLanguage(newLang) {
    language.value = Object.keys(supportedLangs.value).includes(newLang) ? newLang : language.value
    importLanguage()
    localStorage.setItem('userPreferences', JSON.stringify({darkMode: darkMode.value, lang: language.value}))
  }

  const isDarkModeActivated = computed(() => darkMode.value)
  const currentLanguage = computed(() => supportedLangs.value[language.value])

  return {
    supportedLangs,
    updateDarkMode,
    updateLanguage,
    isDarkModeActivated,
    currentLanguage,
  }
})
