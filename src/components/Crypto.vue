<script setup>
defineProps({
  crypto: {
    type: Object,
  },
})
</script>

<template>
    <div class="bg-white dark:bg-slate-900 py-5 px-8 rounded-lg shadow border-l-8 border-green-400 dark:border-green-600">
      <div class="flex items-center">
        <p class="w-1/6 font-bold text-2xl">#{{ crypto.rank }}</p>
        <h2 class="flex-auto font-semibold text-center text-2xl">
          {{ crypto.name }}
          <span class="text-gray-700 dark:text-gray-400 font-normal text-sm">{{ crypto.symbol }}</span>
        </h2>
      </div>

      <div class="mt-3">
        <p class="text-gray-700 dark:text-gray-500 text-lg">
          Price: 
          <span class="text-black dark:text-gray-200 font-bold">{{ crypto.priceUsd }}</span>
        </p>
        
        <p class="text-gray-700 dark:text-gray-500 text-lg">
          Change: 
          <span class="text-black dark:text-gray-200 font-bold">{{ crypto.changePercent24Hr }}</span>
        </p>
      </div>
    </div>
</template>
