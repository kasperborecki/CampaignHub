<template>
    <div class="bg-[#151821] w-full h-full m-4 rounded-2xl p-3">
        <div class="h-[70%]">
            <div class="rounded-xl w-18 h-18" :style="{ backgroundColor: props.color }"></div>
        </div>
        <div class="flex h-[30%] text-gray-400">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    :d="`${props.subIconSvg}`" />
            </svg>
            {{ props.uphillText }}
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    color: string,
    iconSvg: string,
    title: string,
    count: number,
    uphillText: string,
    subIconSvg: string
}>();

</script>
