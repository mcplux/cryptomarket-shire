<script setup>
import { useCryptosStore } from '@/stores/cryptos'
import { useUserPreferencesStore } from '@/stores/userPreferences'
import Cryptos from '@/components/Cryptos.vue'
import Spinner from '@/components/Spinner.vue'
import CryptoError from '@/components/CryptoError.vue'

const cryptos = useCryptosStore()
const userPreferences = useUserPreferencesStore()
</script>

<template>
  <main class="container mx-auto mt-10 p-5 dark:text-gray-200">
    <CryptoError v-if="cryptos.error.status" />
    <div v-else>
      <h1 class="font-bold text-4xl text-center">CryptoMarketShire</h1>
      <p class="text-lg mt-5">{{ userPreferences.lang.subtitle }}</p>

      <Spinner v-if="cryptos.loading" />
    
      <Cryptos v-else />
    </div>
  </main>
</template>
