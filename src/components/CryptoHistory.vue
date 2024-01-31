<script setup>
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'
import { useCryptosStore } from '@/stores/cryptos'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const cryptos = useCryptosStore()
</script>

<template>
  <div class="mt-10 container mx-auto">
    <h2 class="text-center text-2xl font-bold mb-5">History</h2>

    <Line 
      id="crypto-chart"
      :options="{
        responsive: true,
      }"
      :data="{
        labels: cryptos.labels,
        datasets: [
          {
            label: cryptos.crypto.name,
            borderColor: '#6366f1',
            backgroundColor: '#818cf8',
            data: cryptos.values,
          }
        ] 
      }"
    />
  </div>
</template>
