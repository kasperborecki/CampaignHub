<template>
  <main class="grid max-h-screen bg-[#090c13] text-white lg:grid-cols-2">
    <section class="hidden max-h-screen overflow-hidden lg:block relative">
      <img :src="authBackground" alt="" class="h-full w-full object-cover -z-10" />
      <img :src="logo" alt="" class="absolute left-6 top-4 h-12 w-56" />
      <div class="absolute top-20 left-10 w-[60%]">
        <p class="text-[46px] font-bold">Zarządzaj kampaniami z twórcami,
          <span class="text-[#5b2eff]">bez chaosu</span>
        </p>
        <p class="text-[20px] font-thin text-gray-300">
          Wszystko w jednym miejscu: kampanie, twócy, zadania, treści i briefy. Mniej klikania <u>więcej efektów</u>.
        </p>
      </div>
    </section>
    <section
      class="flex max-h-screen items-center justify-center px-6 py-10 sm:px-10 lg:px-16 border-l-[1px] border-gray-900">
      <div class="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-[#784DFF]/10 blur-3xl" />
      <div class="pointer-events-none absolute -top-20 h-72 w-72 rounded-full bg-[#784DFF]/10 blur-3xl" />
      <AuthComponent />
    </section>
  </main>
</template>

<script setup lang="ts">
import authBackground from '@/assets/AuthBackgroundTwoy.png'
import AuthComponent from '@/components/Auth/AuthComponent.vue'
import logo from '@/assets/logo.png'
</script>
