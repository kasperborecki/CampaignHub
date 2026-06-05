<template>
    <div class="relative flex flex-col items-center h-screen w-64 bg-[#090c13] text-white border-r border-gray-900">
        <img :src="logoIcon" alt="logoIcon" class="mt-4 w-14 h-14" />
        <button
            class="flex items-center mt-4 rounded-md bg-[#5b2eff] px-4 py-2 font-semibold text-white hover:bg-[#784DFF] h-12">
            <svg class="mt-px w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M5 12h14m-7 7V5" />
            </svg>
            <p class="ml-2">Nowa kampania</p>
        </button>
        <button :class="[
            'flex items-center justify-start mt-8 rounded-md px-3 py-2 font-semibold h-10 w-[90%]',
            selectedTab === 'dashboard'
                ? 'bg-[#5B2EFF]/20 text-white'
                : 'bg-transparent text-gray-300 hover:bg-[#5B2EFF]/10'
        ]" @click="selectedTab = 'dashboard'">
            <p class="flex ml-2">
                <svg class="w-6 h-6 mr-4 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                </svg>

                Dashboard
            </p>
        </button>
        <button :class="[
            'flex items-center justify-start mt-2 rounded-md px-3 py-2 font-semibold h-10 w-[90%]',
            selectedTab === 'campaigns'
                ? 'bg-[#5B2EFF]/20 text-white'
                : 'bg-transparent text-gray-300 hover:bg-[#5B2EFF]/10'
        ]" @click="selectedTab = 'campaigns'">
            <p class="flex ml-2">
                <svg class="w-6 h-6 mr-4 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M4 9.05H3v2h1v-2Zm16 2h1v-2h-1v2ZM10 14a1 1 0 1 0 0 2v-2Zm4 2a1 1 0 1 0 0-2v2Zm-3 1a1 1 0 1 0 2 0h-2Zm2-4a1 1 0 1 0-2 0h2Zm-2-5.95a1 1 0 1 0 2 0h-2Zm2-3a1 1 0 1 0-2 0h2Zm-7 3a1 1 0 0 0 2 0H6Zm2-3a1 1 0 1 0-2 0h2Zm8 3a1 1 0 1 0 2 0h-2Zm2-3a1 1 0 1 0-2 0h2Zm-13 3h14v-2H5v2Zm14 0v12h2v-12h-2Zm0 12H5v2h14v-2Zm-14 0v-12H3v12h2Zm0 0H3a2 2 0 0 0 2 2v-2Zm14 0v2a2 2 0 0 0 2-2h-2Zm0-12h2a2 2 0 0 0-2-2v2Zm-14-2a2 2 0 0 0-2 2h2v-2Zm-1 6h16v-2H4v2ZM10 16h4v-2h-4v2Zm3 1v-4h-2v4h2Zm0-9.95v-3h-2v3h2Zm-5 0v-3H6v3h2Zm10 0v-3h-2v3h2Z" />
                </svg>
                Kampania
            </p>
        </button>
        <button :class="[
            'flex items-center justify-start mt-2 rounded-md px-3 py-2 font-semibold h-10 w-[90%]',
            selectedTab === 'creators'
                ? 'bg-[#5B2EFF]/20 text-white'
                : 'bg-transparent text-gray-300 hover:bg-[#5B2EFF]/10'
        ]" @click="selectedTab = 'creators'">
            <p class="flex ml-2">
                <svg class="w-6 h-6 mr-4 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" />
                </svg>
                Twórcy
            </p>
        </button>
        <button :class="[
            'flex items-center justify-start mt-2 rounded-md px-3 py-2 font-semibold h-10 w-[90%]',
            selectedTab === 'tasks'
                ? 'bg-[#5B2EFF]/20 text-white'
                : 'bg-transparent text-gray-300 hover:bg-[#5B2EFF]/10'
        ]" @click="selectedTab = 'tasks'">
            <p class="flex ml-2">
                <svg class="w-6 h-6 mr-4 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z" />
                </svg>
                Zadania
            </p>
        </button>
        <button :class="[
            'flex items-center justify-start mt-2 rounded-md px-3 py-2 font-semibold h-10 w-[90%]',
            selectedTab === 'content'
                ? 'bg-[#5B2EFF]/20 text-white'
                : 'bg-transparent text-gray-300 hover:bg-[#5B2EFF]/10'
        ]" @click="selectedTab = 'content'">
            <p class="flex ml-2">
                <svg class="w-6 h-6 mr-4 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                </svg>
                Treści
            </p>
        </button>
        <button :class="[
            'flex items-center justify-start mt-2 rounded-md px-3 py-2 font-semibold h-10 w-[90%]',
            selectedTab === 'calendar'
                ? 'bg-[#5B2EFF]/20 text-white'
                : 'bg-transparent text-gray-300 hover:bg-[#5B2EFF]/10'
        ]" @click="selectedTab = 'calendar'">
            <p class="flex ml-2">
                <svg class="w-6 h-6 mr-4 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                </svg>
                Kalendarz
            </p>
        </button>
        <button :class="[
            'flex items-center justify-start mt-2 rounded-md px-3 py-2 font-semibold h-10 w-[90%]',
            selectedTab === 'payments'
                ? 'bg-[#5B2EFF]/20 text-white'
                : 'bg-transparent text-gray-300 hover:bg-[#5B2EFF]/10'
        ]" @click="selectedTab = 'payments'">
            <p class="flex ml-2">
                <svg class="w-6 h-6 mr-4 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 10h18M6 14h2m3 0h5M3 7v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z" />
                </svg>
                Płatności
            </p>
        </button>
        <button :class="[
            'flex items-center justify-start mt-2 rounded-md px-3 py-2 font-semibold h-10 w-[90%]',
            selectedTab === 'documents'
                ? 'bg-[#5B2EFF]/20 text-white'
                : 'bg-transparent text-gray-300 hover:bg-[#5B2EFF]/10'
        ]" @click="selectedTab = 'documents'">
            <p class="flex ml-2">
                <svg class="w-6 h-6 mr-4 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                        d="M10 12v1h4v-1m4 7H6a1 1 0 0 1-1-1V9h14v9a1 1 0 0 1-1 1ZM4 5h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                </svg>
                Dokumenty
            </p>
        </button>
        <button :class="[
            'flex items-center justify-start mt-2 rounded-md px-3 py-2 font-semibold h-10 w-[90%]',
            selectedTab === 'notes'
                ? 'bg-[#5B2EFF]/20 text-white'
                : 'bg-transparent text-gray-300 hover:bg-[#5B2EFF]/10'
        ]" @click="selectedTab = 'notes'">
            <p class="flex ml-2">
                <svg class="w-6 h-6 mr-4 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 6h8m-8 4h12M6 14h8m-8 4h12" />
                </svg>
                Notatki
            </p>
        </button>
        <button :class="[
            'flex items-center justify-start mt-2 rounded-md px-3 py-2 font-semibold h-10 w-[90%]',
            selectedTab === 'settings'
                ? 'bg-[#5B2EFF]/20 text-white'
                : 'bg-transparent text-gray-300 hover:bg-[#5B2EFF]/10'
        ]" @click="selectedTab = 'settings'">
            <p class="flex ml-2">
                <svg class="w-6 h-6 mr-4 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"
                        d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                Ustawienia
            </p>
        </button>
        <div class="absolute flex bottom-0 border-t border-gray-900 w-full h-20 p-2">
            <img :src="userAvatar" alt="userAvatar" class="h-16 w-16 rounded-full object-cover" />
            <div class="ml-5 flex flex-col justify-center">
                <p class="font-semibold">User Name</p>
                <p class="text-sm text-gray-400">Administrator</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import logoIcon from '@/assets/LogoIcon.png'
import userAvatar from '@/assets/UserAvatar.jpg'

const selectedTab = ref('dashboard')
</script>