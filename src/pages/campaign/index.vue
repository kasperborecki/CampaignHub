<template>
  <div class="px-6 pt-4 flex items-center justify-between h-[7%] mb-2">
    <div>
      <p class="text-3xl font-medium">Kampanie</p>
      <p class="text-gray-400 mt-1">Zarządzaj wszystkimi kampaniami w jednym miejscu</p>
    </div>
    <div class="flex items-center gap-4">
      <form
        class="flex bg-zinc-800 border border-zinc-700 text-white rounded-md shadow text-sm w-50 focus-within:w-100 transition-all"
      >
        <div aria-disabled="true" class="w-10 grid place-content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <input
          type="text"
          spellcheck="false"
          name="text"
          class="bg-transparent py-1.5 outline-none placeholder:text-zinc-400 w-20 focus:w-48 transition-all"
          placeholder="Search..."
        />
      </form>
      <svg
        class="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
        />
      </svg>
    </div>
  </div>
  <div>
    <CampaignStatCardGroup class="px-6 max-h-[13%] max-w-full" />
    <div class="mt-3 ml-6 mr-8 flex items-center justify-between gap-8 border-b border-white/5">
      <div class="flex items-center justify-center">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          class="flex items-center justify-between mx-4 pb-3 text-sm font-semibold transition"
          :class="
            filterTab === tab.value
              ? 'border-b-2 border-[#8B5CF6] text-white'
              : 'border-b-2 border-transparent text-slate-400 hover:text-white'
          "
          @click="filterTab = tab.value"
        >
          {{ tab.label }}
          <div class="bg-[#151821] rounded-full ml-3 h-6 w-6 flex items-center justify-center">
            {{ tab.count }}
          </div>
        </button>
      </div>
      <select
        v-model="selectedFilterSort"
        class="cursor-pointer border border-[#2A2F3D] w-70 rounded-md p-1 text-slate-400 backdrop-blur-md text-lg outline-none hover:bg-slate-900/80 focus:border-white/25 focus:bg-slate-900/90"
      >
        <option disabled value="">Wybierz opcje</option>
        <option v-for="option in sortOptions" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
    <div class="flex-1 min-h-0 px-8 mt-2">
      <CampaignDataTable class="h-full w-full" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import CampaignStatCardGroup from '@/components/Card/campaign/CampaignStatCardGroup.vue'
import CampaignDataTable from '@/components/Card/campaign/CampaignDataTable.vue'
import Select from 'primevue/select'
const filterTab = ref('all')
const selectedFilterSort = ref('')

const tabs = [
  {
    label: 'Wszystkie',
    value: 'all',
    count: '24',
  },
  {
    label: 'W trakcie',;
    value: 'inProgress',
    count: '8',
  },
  {
    label: 'Planowane',
    value: 'planned',
    count: '6',
  },
  {
    label: 'Zakończone',
    value: 'closed',
    count: '10',
  },
  {
    label: 'Wstrzymane',
    value: 'stoped',
    count: '2',
  },
  {
    label: 'Archiwalne',
    value: 'archived',
    count: '2',
  },
]

const sortOptions = [
  { label: 'Sortuj: Najnowsze', value: 'newest' },
  { label: 'Sortuj: Najstarsze', value: 'oldest' },
  { label: 'Sortuj: Alfabetycznie A-Z', value: 'alphAscending' },
  { label: 'Sortuj: Alfabetycznie Z-A', value: 'alphDescending' },
]
</script>
