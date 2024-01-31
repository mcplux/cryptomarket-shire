<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCryptosStore } from '@/stores/cryptos'
import CryptoInfo from '@/components/CryptoInfo.vue'
import CryptoHistory from '@/components/CryptoHistory.vue'

const cryptos = useCryptosStore()

const route = useRoute()

onMounted(async () => {
  await cryptos.getCrypto(route.params.id)
})
</script>

<template>
  <main class="mt-10 p-5 dark:text-gray-200">
    <p v-if="cryptos.loading">Loading...</p>
    <div v-else>
      <CryptoInfo />
      <CryptoHistory />
    </div>
  </main>
</template>
