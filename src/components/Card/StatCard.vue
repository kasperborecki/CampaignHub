<template>
  <div
    class="flex h-full min-h-[112px] w-full flex-col justify-between rounded-2xl border border-white/6 bg-[#151821] px-4 py-3 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.95)]"
  >
    <div class="flex items-start gap-3">
      <div
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ring-white/8"
        :style="{ backgroundColor: props.color }"
      >
        <svg
          class="h-6 w-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          :style="{ color: props.iconSvgColor }"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            :d="`${props.iconSvg}`"
          />
        </svg>
      </div>
      <div class="min-w-0">
        <p class="text-sm font-medium leading-5 text-slate-300">{{ props.title }}</p>
        <p class="mt-1 text-2xl font-semibold leading-none text-[#F5F6FA]">{{ props.count }}</p>
      </div>
    </div>
    <div class="mt-3 flex items-center gap-2 text-xs text-slate-400">
      <svg
        class="h-4 w-4 shrink-0 text-gray-800 dark:text-white"
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
          :d="`${props.subIconSvg}`"
        />
      </svg>
      <p class="truncate">{{ props.uphillText }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: string
  iconSvg: string
  iconSvgColor: string
  title: string
  count: number
  uphillText: string
  subIconSvg: string
}>()
</script>
