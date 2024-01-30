<script setup>
import { formatCurrency, formatPorcentage, didIncreasePrice } from '@/helpers'

defineProps({
  crypto: {
    type: Object,
  },
})
</script>

<template>
    <RouterLink 
      :to="{name: 'crypto', params: {id: crypto.id}}" 
      class="bg-white dark:bg-slate-900 py-5 px-8 rounded-lg shadow hover:scale-105 transition-transform" 
      :class="[didIncreasePrice(crypto.changePercent24Hr) ? 'stonks' : 'not-stonks']"
    >
      <div class="flex gap-3 items-center">
        <p class="w-1/6 font-bold text-2xl">#{{ crypto.rank }}</p>
        <h2 class="flex-auto font-semibold text-center text-2xl truncate">
          {{ crypto.name }}
          <span class="text-gray-700 dark:text-gray-400 font-normal text-sm">{{ crypto.symbol }}</span>
        </h2>
      </div>

      <div class="mt-3">
        <p class="text-gray-700 dark:text-gray-500 text-lg">
          Price: 
          <span class="text-black dark:text-gray-200 font-bold">{{ formatCurrency(crypto.priceUsd) }}</span>
        </p>
        
        <p class="text-gray-700 dark:text-gray-500 text-lg">
          Change: 
          <span class="text-black dark:text-gray-200 font-bold">{{ formatPorcentage(crypto.changePercent24Hr) }}</span>
        </p>
      </div>
    </RouterLink>
</template>
