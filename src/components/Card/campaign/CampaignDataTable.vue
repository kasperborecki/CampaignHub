<template>
  <div
    class="flex h-full min-h-0 items-center justify-between bg-[#151821] px-4 py-3 sm:px-6"
  ></div>
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
                page === item ? 'bg-[#784DFF30] text-[#784DFF]' : 'text-slate-400 hover:bg-gray-700/50',
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

const totalPages = computed(() => {
  let totalPages = Math.ceil(campaignsResponse.totalItems / 5)
  return totalPages
})

const fromItem = computed(() => {
  return (page.value - 1) * itemsPerPage + 1
})

const toItem = computed(() => {
  const toItem =  Math.ceil(page.value * itemsPerPage)
  if(toItem > campaignsResponse.totalItems){
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
