<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCryptosStore } from '@/stores/cryptos'

const cryptos = useCryptosStore()

const route = useRoute()

onMounted(async () => {
  await cryptos.getCrypto(route.params.id)
})
</script>

<template>
  <p v-if="cryptos.loading">Loading...</p>

  <main v-else class="container mx-auto mt-10 p-5 dark:text-gray-200">
    <h1>{{ cryptos.crypto.name }}</h1>
  </main>

</template>
