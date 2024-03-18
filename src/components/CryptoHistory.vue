<script setup>
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'
import { useCryptosStore } from '@/stores/cryptos'
import { useUserPreferencesStore } from '@/stores/userPreferences'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const cryptos = useCryptosStore()
const userPreferences = useUserPreferencesStore()
</script>

<template>
  <div class="mt-10 container mx-auto">
    <h2 class="text-center text-2xl font-bold mb-5">{{ userPreferences.lang.chart }}</h2>

    <div class="overflow-x-scroll md:overflow-hidden">
      <div class="w-[64rem] md:w-full">
        <Line 
          id="crypto-chart"
          :options="{
            responsive: true,
            scales: {
              x: {
                ticks: {
                  color: userPreferences.isDarkModeActivated ? '#9ca3af' : '#1f2937'
                },
                grid: {
                  color: userPreferences.isDarkModeActivated ? '#4b5563' : '#9ca3af'
                }
              },
              y: {
                ticks: {
                  color: userPreferences.isDarkModeActivated ? '#9ca3af' : '#1f2937'
                },
                grid: {
                  color: userPreferences.isDarkModeActivated ? '#4b5563' : '#9ca3af'
                }
              },
            }
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
    </div>
  </div>
</template>
