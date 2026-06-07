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

        <div v-for="task in filteredTasks" :key="task.id"
            class="h-16 grid grid-cols-[4%_40%_28%_8%_10%] gap-2 items-center rounded-xl px-1 py-2 transition hover:bg-white/[0.03]">
            <input type="checkbox"
                class="h-5 w-5 appearance-none rounded-md border border-slate-600 bg-transparent checked:border-[#8B5CF6] checked:bg-[#8B5CF6] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/40" />
            <p class="text-[14px]">{{ task.title.slice(0, 40) }}</p>
            <div class="flex justify-end">
                <div
                    class="flex h-7 w-fit items-center justify-center rounded-md px-3 text-xs font-bold bg-[#2A2F3D80] text-slate-400">
                    {{ task.campaign }}
                </div>
            </div>
            <div class="flex h-7 w-14 items-center justify-center rounded-md px-3 text-xs font-bold" :style="{
                backgroundColor: task.priority === 'low' ? '#22C55E28' : task.priority === 'medium' ? '#F59E0B28' : task.priority === 'high' ? '#EF444428' : '',
                color: task.priority === 'low' ? '#22C55E' : task.priority === 'medium' ? '#F59E0B' : task.priority === 'high' ? '#EF4444' : ''
            }">
                {{ task.priorityLabel }}
            </div>
            <p class="w-24 text-end">{{ task.dueDate }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { tasks } from '@/fakeData/tasksData'
import { computed, ref } from 'vue';

const filter = ref("todo")
const tabs = [
    {
        label: 'Do zrobienia',
        value: 'todo',
    },
    {
        label: 'W trakcie',
        value: 'inProgress',
    },
    {
        label: 'Zakończone',
        value: 'closed',
    },
]

const filteredTasks = computed(() => {
    if (filter.value == 'all') {
        return tasks
    }

    return tasks.filter(tasks => tasks.status === filter.value)
})
</script>