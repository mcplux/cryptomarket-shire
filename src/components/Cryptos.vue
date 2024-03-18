<script setup>
import { useCryptosStore } from '@/stores/cryptos'
import { onMounted } from 'vue'
import Crypto from './Crypto.vue'

const cryptos = useCryptosStore()

</script>

<template>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-10">
      <Crypto 
        v-for="crypto in cryptos.cryptos"
        :crypto="crypto"
        :key="crypto.id" 
      />
    </div>
</template>
