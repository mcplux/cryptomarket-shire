import { ref } from 'vue'
import { defineStore } from 'pinia'
import CoinCapService from '@/services/CoinCapService'

export const useCryptosStore = defineStore('cryptos', () => {
  const cryptos = ref([])

  async function getCryptos() {
    const data = await CoinCapService.getCryptos()

    cryptos.value = data.data.data
  }

  return {
    getCryptos,
  }
})
