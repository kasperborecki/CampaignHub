<template>
    <div class="px-6 pt-4 flex items-center justify-between h-[7%] mb-2">
        <div>
            <p class="text-3xl font-medium">Cześć, UserName! 👋</p>
            <p class="text-gray-400 mt-1">Witaj w swoim panelu kampanii!</p>
        </div>
        <div class="flex items-center gap-4">
            <form
                class="flex bg-zinc-800 border border-zinc-700 text-white rounded-md shadow text-sm w-50 focus-within:w-100 transition-all">
                <div aria-disabled="true" class="w-10 grid place-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </svg>
                </div>
                <input type="text" spellcheck="false" name="text"
                    class="bg-transparent py-1.5 outline-none placeholder:text-zinc-400 w-20 focus:w-48 transition-all"
                    placeholder="Search..." />
            </form>
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z" />
            </svg>
        </div>
    </div>
    <DashboardStatsCardGroup class="px-6 max-h-[13%] max-w-full" />
    <div class="mx-8 mt-7 grid grid-cols-[3fr_2fr] items-start gap-6">
        <div class="flex min-w-0 flex-col gap-6">
            <DashboardCampaignCard class="h-[40vh] min-w-0" />

            <DashboardTermsCard class="h-[30vh] min-w-0" />
        </div>

        <div class="flex min-w-0 flex-col gap-6">
            <DashboardTaskCard class="h-[50vh] min-w-0" />

            <DashboardActionsCard class="h-[20vh] min-w-0" />
        </div>
    </div>
</template>

<script setup lang="ts">
import DashboardActionsCard from '@/components/Card/DashboardActionsCard.vue';
import DashboardCampaignCard from '@/components/Card/DashboardCampaignCard.vue';
import DashboardStatsCardGroup from '@/components/Card/DashboardStatsCardGroup.vue';
import DashboardTaskCard from '@/components/Card/DashboardTaskCard.vue';
import DashboardTermsCard from '@/components/Card/DashboardTermsCard.vue';

</script>