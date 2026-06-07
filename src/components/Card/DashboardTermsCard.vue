<template>
    <div class="w-full rounded-2xl bg-[#151821] px-6 py-4 text-white shadow-xl shadow-black/20">
        <div class="flex items-center justify-between mb-2">
            <div class="flex">
                <div class="flex flex-col items-center justify-center rounded-xl w-8 h-8 mr-2 mt-1"
                    :style="{ backgroundColor: '#EF444428' }">
                    <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                        :style="{ color: '#EF4444' }">
                        <path fill="currentColor"
                            d="M4 9.05H3v2h1v-2Zm16 2h1v-2h-1v2ZM10 14a1 1 0 1 0 0 2v-2Zm4 2a1 1 0 1 0 0-2v2Zm-3 1a1 1 0 1 0 2 0h-2Zm2-4a1 1 0 1 0-2 0h2Zm-2-5.95a1 1 0 1 0 2 0h-2Zm2-3a1 1 0 1 0-2 0h2Zm-7 3a1 1 0 0 0 2 0H6Zm2-3a1 1 0 1 0-2 0h2Zm8 3a1 1 0 1 0 2 0h-2Zm2-3a1 1 0 1 0-2 0h2Zm-13 3h14v-2H5v2Zm14 0v12h2v-12h-2Zm0 12H5v2h14v-2Zm-14 0v-12H3v12h2Zm0 0H3a2 2 0 0 0 2 2v-2Zm14 0v2a2 2 0 0 0 2-2h-2Zm0-12h2a2 2 0 0 0-2-2v2Zm-14-2a2 2 0 0 0-2 2h2v-2Zm-1 6h16v-2H4v2ZM10 16h4v-2h-4v2Zm3 1v-4h-2v4h2Zm0-9.95v-3h-2v3h2Zm-5 0v-3H6v3h2Zm10 0v-3h-2v3h2Z" />
                    </svg>
                </div>
                <div>
                    <p class="text-[18px] font-medium">Zbliżające się terminy</p>
                    <p class="text-[12px] font-medium text-slate-400">Ważne terminy w zblizających się dniach</p>
                </div>
            </div>

            <button class="text-sm font-semibold text-[#8B5CF6] hover:text-[#A78BFA]">
                Zobacz wszystkie →
            </button>
        </div>
        <div v-for="deadline in deadlines" :key="deadline.id"
            class="flex gap-2 items-center justify-between rounded-xl px-1 py-2 transition hover:bg-white/[0.03]">
            <div class="flex items-center justify-center">
                <div class="flex flex-col rounded-xl bg-[#2A2F3D89] h-12 w-12 items-center">
                    <p class="text-[18px] font-semibold">{{ deadline.day }}</p>
                    <p class="text-[12px] text-slate-400">{{ deadline.month }}</p>
                </div>
                <div class="w-1 h-10 bg-[#8B5CF6] rounded-full ml-2 mr-3"></div>
                <div>
                    <p class="text-[15px] font-medium">{{ deadline.title }}</p>
                    <p class="text-[12px] font-medium text-slate-400">{{ deadline.subtitle }}</p>
                </div>
            </div>
            <p class="text-[16px] text-slate-400">{{ formatDeadlineTime(deadline.datetime,
                deadline.endDatetime) }}</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { deadlines } from '@/fakeData/calendarData'

const formatDeadlineTime = (datetime: string, endDateTime?: string | null) => {
    const start = new Date(datetime)

    const startTime = start.toLocaleTimeString('pl-PL', {
        hour: '2-digit',
        minute: '2-digit',
    })

    if (!endDateTime) return startTime

    const end = new Date(endDateTime)

    const endTime = end.toLocaleTimeString('pl-PL', {
        hour: '2-digit',
        minute: '2-digit',
    })

    return `${startTime} - ${endTime}`
}

</script>