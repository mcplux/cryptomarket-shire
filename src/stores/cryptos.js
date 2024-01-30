import { ref } from 'vue'
import { defineStore } from 'pinia'
import CoinCapService from '@/services/CoinCapService'

export const useCryptosStore = defineStore('cryptos', () => {
  const cryptos = ref([])
  const crypto = ref({})
  const loading = ref(false)

  async function getCryptos() {
    loading.value = true
    try {
      const data = await CoinCapService.getCryptos()
      cryptos.value = data.data.data
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  async function getCrypto(id) {
    loading.value = true
    try {
      const data = await CoinCapService.getCrypto(id)
      crypto.value = data.data.data
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  return {
    cryptos,
    crypto,
    loading,
    getCryptos,
    getCrypto,
  }
})
