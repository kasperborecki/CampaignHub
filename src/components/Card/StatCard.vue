<template>
    <div class="bg-[#151821] w-full h-full m-2 rounded-2xl p-3">
        <div class="h-[70%] flex">
            <div class="flex items-center justify-center rounded-xl w-18 h-18 mr-2"
                :style="{ backgroundColor: props.color }">
                <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                    :style="{ color: props.iconSvgColor }">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        :d="`${props.iconSvg}`" />
                </svg>

            </div>
            <div>
                <p class="font-light">{{ props.title }}</p>
                <p class="text-3xl mt-1 font-semibold text-[#F5F6FA]">{{ props.count }}</p>
            </div>
        </div>
        <div class="flex h-[30%] text-gray-400 mt-3">
            <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    :d="`${props.subIconSvg}`" />
            </svg>
            <p class=" text-[14px]">{{ props.uphillText }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    color: string,
    iconSvg: string,
    iconSvgColor: string,
    title: string,
    count: number,
    uphillText: string,
    subIconSvg: string
}>();

</script>
