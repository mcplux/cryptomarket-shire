import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import CoinCapService from '@/services/CoinCapService'

export const useCryptosStore = defineStore('cryptos', () => {
  const cryptos = ref([])
  const crypto = ref({})
  const labels = ref([])
  const values = ref([])
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
    cryptos.value = []
    loading.value = true
    try {
      const [ data, history ] = await Promise.all([
        await CoinCapService.getCrypto(id),
        await CoinCapService.getHistory(id),
      ])

      crypto.value = data.data.data
      labels.value = history.data.data.map(date => date.date.split('T')[0])
      values.value = history.data.data.map(date => Number(date.priceUsd))
    } catch (error) {
      console.error(error)
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
    getCryptos,
    getCrypto,
  }
})
