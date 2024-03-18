<script setup>
import { useUserPreferencesStore } from '@/stores/userPreferences'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import ChevronDownIcon from './icons/ChevronDownIcon.vue'

const userPreferences = useUserPreferencesStore()
</script>

<template>
  <div>
    <Menu as="div" class="relative inline-block text-left">
      <div>
        <MenuButton
          class="inline-flex w-full justify-center rounded-md dark:bg-black bg-blue-800 px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          {{ userPreferences.currentLanguage }}
          <ChevronDownIcon />
        </MenuButton>
      </div>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-200 dark:bg-gray-500 shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }" v-for="lang in Object.keys(userPreferences.supportedLangs)">
              <button
                class="text-gray-900 dark:text-white"
                :class="[
                  active ? 'bg-blue-500 dark:bg-slate-900 text-white' : '',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]"
                @click="userPreferences.updateLanguage(lang)"
              >
                {{ userPreferences.supportedLangs[lang] }}
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
