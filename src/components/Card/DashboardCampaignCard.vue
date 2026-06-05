<template>
    <div class="w-full rounded-2xl bg-[#151821] px-6 py-4 text-white shadow-xl shadow-black/20">
        <div class="flex items-center justify-between">
            <p class="text-[18px] font-medium">Moje kampanie</p>

            <button class="text-sm font-semibold text-[#8B5CF6] hover:text-[#A78BFA]">
                Zobacz wszystkie →
            </button>
        </div>

        <div class="mt-3 flex items-center gap-8 border-b border-white/5">
            <button v-for="tab in tabs" :key="tab.value" class="pb-3 text-sm font-semibold transition" :class="filter === tab.value
                ? 'border-b-2 border-[#8B5CF6] text-white'
                : 'border-b-2 border-transparent text-slate-400 hover:text-white'" @click="filter = tab.value">
                {{ tab.label }}
            </button>
        </div>

        <div v-for="campaign in filteredCampaigns" :key="campaign.id"
            class="grid grid-cols-[52px_1.5fr_90px_110px_120px_120px_70px_32px] items-center gap-4 rounded-xl px-1 py-2 transition hover:bg-white/[0.03]">
            <img v-if="campaign.image" :src="campaign.image" alt="" class="h-12 w-12 rounded-lg object-cover" />

            <div v-else
                class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-700 via-purple-500 to-purple-700 p-1 text-center text-[10px] font-bold leading-tight text-white">
                {{ campaign.title.replace(/\d/g, '') }}
            </div>

            <div class="min-w-0">
                <p class="truncate text-sm font-bold text-white">
                    {{ campaign.title }}
                </p>
                <p class="truncate text-xs font-medium text-slate-400">
                    {{ campaign.brand }}
                </p>
            </div>

            <div class="flex h-7 w-fit items-center justify-center rounded-md px-3 text-xs font-bold" :style="{
                backgroundColor: campaign.status === 'inProgress' ? '#8B5CF628' : campaign.status === 'planned' ? '#0EA5E928' : campaign.status === 'closed' ? '#EF444428' : '',
                color: campaign.status === 'inProgress' ? '#8B5CF6' : campaign.status === 'planned' ? '#0EA5E9' : campaign.status === 'closed' ? '#EF4444' : ''
            }">
                {{ campaign.statusLabel }}
            </div>

            <p class="text-sm font-medium text-slate-300">
                {{ campaign.creators.current }} / {{ campaign.creators.total }} twórców
            </p>

            <div class="h-2 w-28 rounded-full bg-[#223041]">
                <div class="h-2 rounded-full bg-[#8B5CF6]"
                    :style="{ width: `${(campaign.creators.current / campaign.creators.total) * 100}%` }"></div>
            </div>

            <div class="flex items-center">
                <img v-for="avatar in 3" :key="avatar" :src="userAvatar" alt="userAvatar"
                    class="-ml-2 h-8 w-8 rounded-full border-2 border-[#151821] object-cover first:ml-0" />

                <span v-if="campaign.extraCreators > 0" class="ml-2 text-xs font-semibold text-slate-300">
                    +{{ campaign.extraCreators }}
                </span>
            </div>

            <div class="flex items-center gap-1 text-sm font-semibold text-slate-300">
                <svg class="h-5 w-5 text-slate-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z" />
                </svg>

                {{ campaign.messagesCount }}
            </div>

            <button
                class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 hover:text-white">
                <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="3"
                        d="M6 12h.01m6 0h.01m5.99 0h.01" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { campaigns } from '@/fakeData/campaignData'
import { computed, ref } from 'vue';
import userAvatar from '@/assets/UserAvatar.jpg'

const filter = ref("all")
const tabs = [
    {
        label: 'Wszystkie',
        value: 'all',
    },
    {
        label: 'W trakcie',
        value: 'inProgress',
    },
    {
        label: 'Planowane',
        value: 'planned',
    },
    {
        label: 'Zakończone',
        value: 'closed',
    },
]

const filteredCampaigns = computed(() => {
    if (filter.value == 'all') {
        return campaigns
    }

    return campaigns.filter(campaigns => campaigns.status === filter.value)
})
</script>