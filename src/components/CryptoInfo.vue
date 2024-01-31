<script setup>
import { useCryptosStore } from '@/stores/cryptos'
import { formatCurrency, formatPorcentage } from '@/helpers';

const cryptos = useCryptosStore()
</script>

<template>
  <div class="w-full md:w-2/3 lg:w-1/2 mx-auto p-5">
    <h1 class="text-3xl font-bold uppercase text-center">
      {{ cryptos.crypto?.name }}
      <span class="font-normal text-lg text-gray-600 dark:text-gray-400">{{ cryptos.crypto?.symbol }}</span>
    </h1>

    <div class="flex flex-col md:flex-row gap-4 justify-between md:items-center mt-5">
      <div class="space-y-4">
        <p class="text-gray-800 dark:text-gray-400 text-lg">
          Rank: 
          <span class="text-black dark:text-gray-100 font-bold">#{{ cryptos.crypto.rank }}</span>
        </p>

        <p class="text-gray-800 dark:text-gray-400 text-lg">
          Price: 
          <span class="text-black dark:text-gray-100 font-bold">{{ formatCurrency(cryptos.crypto?.priceUsd) }}</span>
        </p>

        <p class="text-gray-800 dark:text-gray-400 text-lg">
          Change (24h): 
          <span class="text-black dark:text-gray-100 font-bold">{{ formatPorcentage(cryptos.crypto.changePercent24Hr) }}</span>
        </p>
      </div>

      <div class="space-y-4">
        <p class="text-gray-800 dark:text-gray-400 text-lg">
          Supply: 
          <span class="text-black dark:text-gray-100 font-bold">
            {{ cryptos.crypto.symbol }} {{ cryptos.crypto?.supply?.split('.')[0] }}
          </span>
        </p>

        <p class="text-gray-800 dark:text-gray-400 text-lg">
          Max supply: 
          <span class="text-black dark:text-gray-100 font-bold">
            {{ cryptos.crypto.symbol }} {{ cryptos.crypto?.maxSupply?.split('.')[0] ?? '-' }}
          </span>
        </p>

        <p class="text-gray-800 dark:text-gray-400 text-lg">
          Volume (24h): 
          <span class="text-black dark:text-gray-100 font-bold">
            ${{ cryptos.crypto?.volumeUsd24Hr?.split('.')[0] ?? '-' }}
          </span>
        </p>

        <p class="text-gray-800 dark:text-gray-400 text-lg">
          MarketCap: 
          <span class="text-black dark:text-gray-100 font-bold">
            ${{ cryptos.crypto?.marketCapUsd?.split('.')[0] ?? '-' }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
