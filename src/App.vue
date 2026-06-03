<template>
  <div v-if="isAuthenticated" class="flex min-h-screen">
    <SideBarComponent class="shirnk-0" />
    <main class="min-h-screen flex-1 overflow-auto">
      <router-view />
    </main>
  </div>
  <div v-else class="min-h-screen">
    <router-view />
  </div>
</template>
<script setup lang="ts">
import { useAuthHolderStore } from '@/stores/authHolder'
import SideBarComponent from '@/components/Sidebar/SideBarComponent.vue'
import { computed } from 'vue'

const authStore = useAuthHolderStore()
const isAuthenticated = computed(() => authStore.isAuthenticated)
</script>
