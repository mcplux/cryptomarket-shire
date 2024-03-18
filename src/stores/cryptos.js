import { onMounted, reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import CoinCapService from '@/services/CoinCapService'
import { useUserPreferencesStore } from './userPreferences'

export const useCryptosStore = defineStore('cryptos', () => {
  const router = useRouter()
  const userPreferences = useUserPreferencesStore()

  const cryptos = ref([])
  const crypto = ref({})
  const labels = ref([])
  const values = ref([])
  const loading = ref(false)
  const error = reactive({
    status: false,
    msg: '',
  })

  onMounted(() => {
    getCryptos()
  })

  function returnHome() {
    crypto.value = {}
    labels.value = []
    values.value = []
    error.status = false
    error.msg = ''

    userPreferences.updateLanguage('en')
    getCryptos()
    router.push({name: 'home'})
  }

  async function getCryptos() {
    crypto.value = {}
    labels.value = []
    values.value = []
    loading.value = true
    error.status = false
    error.msg = ''
    try {
      const data = await CoinCapService.getCryptos()
      cryptos.value = data.data.data
    } catch (err) {
      error.msg = err.response?.data?.error ?? userPreferences.lang.genericError
      error.status = true
    } finally {
      loading.value = false
    }
  }

  async function getCrypto(id) {
    cryptos.value = []
    loading.value = true
    error.status = false
    error.msg = ''
    try {
      const [ data, history ] = await Promise.all([
        await CoinCapService.getCrypto(id),
        await CoinCapService.getHistory(id),
      ])

      crypto.value = data.data.data
      labels.value = history.data.data.map(date => date.date.split('T')[0])
      values.value = history.data.data.map(date => Number(date.priceUsd))
    } catch (err) {
      error.msg = err.response?.data?.error ?? userPreferences.lang.genericError
      error.status = true
    } finally {
      loading.value = false
    }
  }

  return {
    cryptos,
    crypto,
    labels,
    values,
    loading,
    error,
    returnHome,
    getCryptos,
    getCrypto,
  }
})
