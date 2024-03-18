import { computed, onMounted, reactive, ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserPreferencesStore = defineStore('user-preferences', () => {
  const darkMode = ref(false)
  const language = ref('')
  const lang = ref({})
  const supportedLangs = ref({
    en: 'English',
    es: 'Español',
  })
  const error = reactive({
    msg: '',
    status: false,
  })

  onMounted(() => {
    if(localStorage.getItem('userPreferences')) {
      language.value = JSON.parse(localStorage.getItem('userPreferences')).lang ?? 'en'
      importLanguage()

      darkMode.value = JSON.parse(localStorage.getItem('userPreferences')).darkMode ?? false
      localStorage.setItem('userPreferences', JSON.stringify({darkMode: darkMode.value, lang: language.value}))
    } else {
      const navigatorLang = (navigator.language || 'en').substring(0, 2)
      language.value = Object.keys(supportedLangs.value).includes(navigatorLang) ? navigatorLang : 'en'
      importLanguage()

      darkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches

      localStorage.setItem('userPreferences', JSON.stringify({darkMode: darkMode.value, lang: language.value}))
    }
  })

  async function importLanguage() {
    error.status = false
    error.msg = ''
    try {
      const response = await fetch(`locale/${language.value}.json`)
      lang.value = await response.json()
    } catch (err) {
      error.status = true
      error.msg = 'An error has occurred'
    }
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
    lang,
    error,
    supportedLangs,
    updateDarkMode,
    updateLanguage,
    isDarkModeActivated,
    currentLanguage,
  }
})
