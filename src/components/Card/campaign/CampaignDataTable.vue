<template>
  <div
    v-for="campaign in pagedCampaigns"
    :key="campaign.id"
    class="flex h-full min-h-0 items-center bg-[#151821] px-4 py-3 sm:px-6"
  >
    <div>
      <img
        v-if="campaign.imageUrl"
        :src="campaign.imageUrl"
        alt="campaign logo"
        class="h-19 w-19 rounded-lg object-cover"
      />

      <div
        v-else
        class="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-700 via-purple-500 to-purple-700 p-1 text-center text-[10px] font-bold leading-tight text-white"
      >
        {{ campaign.title.replace(/\d/g, '') }}
      </div>

      <div class="min-w-0">
        <div class="flex">
          <p class="truncate text-sm font-bold text-white">
            {{ campaign.title }}
          </p>
          <div
            class="flex h-5 ml-4 w-fit items-center justify-center rounded-md px-3 text-xs font-bold"
            :style="{
              backgroundColor:
                campaign.status === 'inProgress'
                  ? '#8B5CF628'
                  : campaign.status === 'planned'
                    ? '#0EA5E928'
                    : campaign.status === 'closed'
                      ? '#EF444428'
                      : '',
              color:
                campaign.status === 'inProgress'
                  ? '#8B5CF6'
                  : campaign.status === 'planned'
                    ? '#0EA5E9'
                    : campaign.status === 'closed'
                      ? '#EF4444'
                      : '',
            }"
          >
            {{ campaign.status }}
          </div>
        </div>
        <p class="truncate text-xs font-medium text-slate-400">
          {{ campaign.brand }}
        </p>
        <div class="flex">
          <p
            v-for="platform in campaign.platforms"
            :key="platform"
            class="mr-2 truncate text-xs font-medium text-slate-400"
          >
            {{ platform }}
          </p>
          <div
            class="flex items-center justify-center px-2 h-6 bg-[#090c13] rounded-lg text-xs font-medium text-slate-400"
          >
            <svg
              v-if="campaign.budget.hidden"
              class="w-5 h-5 text-orange-400/70 dark:text-white mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
              />
            </svg>

            <svg
              v-else
              class="w-5 h-5 text-orange-400/70 dark:text-white mr-1"
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
                d="M10 14v3m4-6V7a3 3 0 1 1 6 0v4M5 11h10a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z"
              />
            </svg>

            Budżet: {{ campaign.budget.hidden ? 'Ukryte' : campaign.budget.amount }}
            {{ campaign.budget.currency }}
          </div>
          <div
            class="flex items-center justify-center px-2 h-6 ml-2 bg-[#090c13] rounded-lg text-xs font-medium text-slate-400"
          >
            Opiekun: {{ campaign.guardian.name }}
          </div>
        </div>
        <div class="flex text-xs font-medium text-slate-400">
          <p>Utworzono: {{ campaign.dates.createdAt?.slice(0, 10) }}</p>
          <p>•</p>
          <p>Utworzono: {{ campaign.dates.updatedAt?.slice(0, 10) }}</p>
        </div>
      </div>
    </div>
    <!-- <div
      class="flex h-7 w-fit items-center justify-center rounded-md px-3 text-xs font-bold"
      :style="{
        backgroundColor:
          campaign.status === 'inProgress'
            ? '#8B5CF628'
            : campaign.status === 'planned'
              ? '#0EA5E928'
              : campaign.status === 'closed'
                ? '#EF444428'
                : '',
        color:
          campaign.status === 'inProgress'
            ? '#8B5CF6'
            : campaign.status === 'planned'
              ? '#0EA5E9'
              : campaign.status === 'closed'
                ? '#EF4444'
                : '',
      }"
    >
      {{ campaign.statusLabel }}
    </div>

    <p class="text-sm font-medium text-slate-300">
      {{ campaign.creators.current }} / {{ campaign.creators.total }} twórców
    </p>

    <div class="h-2 w-28 rounded-full bg-[#223041]">
      <div
        class="h-2 rounded-full bg-[#8B5CF6]"
        :style="{ width: `${(campaign.creators.current / campaign.creators.total) * 100}%` }"
      ></div>
    </div>

    <div class="flex items-center">
      <img
        v-for="avatar in 3"
        :key="avatar"
        :src="userAvatar"
        alt="userAvatar"
        class="-ml-2 h-8 w-8 rounded-full border-2 border-[#151821] object-cover first:ml-0"
      />

      <span v-if="campaign.extraCreators > 0" class="ml-2 text-xs font-semibold text-slate-300">
        +{{ campaign.extraCreators }}
      </span>
    </div>

    <div class="flex items-center gap-1 text-sm font-semibold text-slate-300">
      <svg
        class="h-5 w-5 text-slate-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7.556 8.5h8m-8 3.5H12m7.111-7H4.89a.896.896 0 0 0-.629.256.868.868 0 0 0-.26.619v9.25c0 .232.094.455.26.619A.896.896 0 0 0 4.89 16H9l3 4 3-4h4.111a.896.896 0 0 0 .629-.256.868.868 0 0 0 .26-.619v-9.25a.868.868 0 0 0-.26-.619.896.896 0 0 0-.63-.256Z"
        />
      </svg>

      {{ campaign.messagesCount }}
    </div>

    <button
      class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-white/5 hover:text-white"
    >
      <svg
        class="h-5 w-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="3"
          d="M6 12h.01m6 0h.01m5.99 0h.01"
        />
      </svg>
    </button> -->
  </div>
  <div
    class="flex items-center justify-between border-t border-gray-200 bg-[#151821] px-4 py-3 sm:px-6"
  >
    <div class="flex flex-1 justify-between sm:hidden">
      <a
        href="#"
        class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >Previous</a
      >
      <a
        href="#"
        class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >Next</a
      >
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-slate-400">
          Showing
          <span class="font-medium">{{ fromItem }}</span>
          to
          <span class="font-medium">{{ toItem }}</span>
          of
          <span class="font-medium">{{ campaignsResponse.totalItems }}</span>
          results
        </p>
      </div>
      <div>
        <nav aria-label="Pagination" class="isolate inline-flex -space-x-px rounded-md shadow-xs">
          <a
            href="#"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-slate-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            @click="prevPage()"
          >
            <span class="sr-only">Previous</span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="size-5"
            >
              <path
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          </a>
          <template v-for="(item, index) in paginationItems" :key="`${item}-${index}`">
            <span
              v-if="item == '...'"
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-400 inset-ring inset-ring-gray-300 cursor-not-allowed"
            >
              ...
            </span>
            <button
              v-else
              type="button"
              @click="goToPage(item)"
              :class="[
                'relative inline-flex items-center px-4 py-2 text-sm font-semibold inset-ring inset-ring-gray-300 focus:z-20 focus:outline-offset-0 cursor-pointer',
                page === item
                  ? 'bg-[#784DFF30] text-[#784DFF]'
                  : 'text-slate-400 hover:bg-gray-700/50',
              ]"
            >
              {{ item }}
            </button>
          </template>
          <a
            href="#"
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-slate-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            @click="nextPage()"
          >
            <span class="sr-only">Next</span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              data-slot="icon"
              aria-hidden="true"
              class="size-5"
            >
              <path
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { campaignsResponse } from '@/fakeData/campaignsListData'

type PaginationItem = number | '...'
const page = ref(1)
const itemsPerPage = 5

const pagedCampaigns = computed(() => {
  return campaignsResponse.campaigns.slice(fromItem.value - 1, toItem.value)
})

const totalPages = computed(() => {
  let totalPages = Math.ceil(campaignsResponse.totalItems / 5)
  return totalPages
})

const fromItem = computed(() => {
  return (page.value - 1) * itemsPerPage + 1
})

const toItem = computed(() => {
  const toItem = Math.ceil(page.value * itemsPerPage)
  if (toItem > campaignsResponse.totalItems) {
    return campaignsResponse.totalItems
  }

  return toItem
})

const paginationItems = computed<PaginationItem[]>(() => {
  const total = totalPages.value
  const current = page.value

  if (total <= 5) {
    return Array.from({ length: total }, (_, index) => index + 1)
  }

  if (current < 3) {
    return [1, 2, 3, '...', total]
  }

  if (current >= total - 2) {
    return [1, '...', total - 2, total - 1, total]
  }

  return [1, '...', current - 1, current, current + 1, '...', total]
})

const goToPage = (selectedPage: number) => {
  if (selectedPage < 1 || selectedPage > totalPages.value) return

  page.value = selectedPage
}

const nextPage = () => {
  goToPage(page.value + 1)
}

const prevPage = () => {
  goToPage(page.value - 1)
}
</script>
