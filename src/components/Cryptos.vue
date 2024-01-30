<script setup>
import { useCryptosStore } from '@/stores/cryptos'
import { onMounted } from 'vue';

const cryptos = useCryptosStore()

onMounted(async () => {
  await cryptos.getCryptos()
})
</script>

<template>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-10">
      
    </div>
</template>
