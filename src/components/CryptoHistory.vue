<script setup>
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'
import { useCryptosStore } from '@/stores/cryptos'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const cryptos = useCryptosStore()
</script>

<template>
  <div>
    <h1>History</h1>

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
            borderColor: '#60a5fa',
            backgroundColor: '#1d4ed8',
            data: cryptos.values,
          }
        ] 
      }"
    />
  </div>
</template>
