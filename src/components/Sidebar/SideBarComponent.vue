<template>
    <div class="relative flex flex-col items-center h-screen w-64 bg-[#090c13] text-white border-r border-gray-900">
        <img :src="logoIcon" alt="logoIcon" class="mt-4 w-14 h-14" />
        <button
            class="flex items-center mt-8 rounded-md bg-[#5b2eff] px-4 py-2 font-semibold text-white hover:bg-[#784DFF] h-12">
            <svg class="mt-px w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 12h14m-7 7V5" />
            </svg>
            <p class="ml-2">Nowa kampania</p>
        </button>
        <button
            class="flex items-center mt-4 rounded-md bg-transparent px-4 py-2 font-semibold text-gray-300 hover:bg-[#784DFF]/10 h-12"
            @click="selectedTab = 'dashboard'">
            <p class="ml-2">Dashboard</p>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logoIcon from '@/assets/LogoIcon.png'

const selectedTab = ref('dashboard')
</script>