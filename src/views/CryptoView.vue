<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCryptosStore } from '@/stores/cryptos'
import { useUserPreferencesStore } from '@/stores/userPreferences'
import CryptoInfo from '@/components/CryptoInfo.vue'
import CryptoHistory from '@/components/CryptoHistory.vue'
import Spinner from '@/components/Spinner.vue'
import CryptoError from '@/components/CryptoError.vue'

const route = useRoute()
const cryptos = useCryptosStore()
const userPreferences = useUserPreferencesStore()

onMounted(async () => {
  await cryptos.getCrypto(route.params.id)
})
</script>

<template>
  <main class="mt-10 p-5 dark:text-gray-200">
    <Spinner v-if="cryptos.loading" />
    <CryptoError v-else-if="cryptos.error.status || userPreferences.error.status" />
    <div class="container mx-auto" v-else>
      <CryptoInfo />
      <CryptoHistory />
    </div>
  </main>
</template>
