<script setup>
import { useCryptosStore } from '@/stores/cryptos'

const cryptos = useCryptosStore()
</script>

<template>
  <div class="bg-red-400 max-w-md mx-auto p-3 rounded">
    <p class="text-red-900 uppercase text-center font-bold">{{ cryptos.error.msg || 'An error has occurred' }}</p>
  </div>
</template>
