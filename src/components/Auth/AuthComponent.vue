<template>
    <form class="w-full max-w-115 space-y-7" @submit.prevent>
        <header class="space-y-2 text-center">
            <p class="text-3xl font-thin text-white pb-2">Witaj ponownie!</p>
            <p class="text-lg font-bold text-slate-400 pb-8">Zaloguj się do swojego konta</p>
        </header>

        <div class="grid grid-cols-2 rounded-[10px] border border-white/15 bg-[#0d0e14] p-1">
            <button type="button" class="h-12 rounded-lg text-sm font-semibold transition" :class="authType === 0
                ? 'border border-[#5b2eff]/50 bg-[#5b2eff]/15 text-[#a78bfa]'
                : 'text-slate-400 hover:text-white'
                " @click="authType = 0">
                Zaloguj się
            </button>
            <button type="button" class="h-12 rounded-lg text-sm font-semibold transition" :class="authType === 1
                ? 'border border-[#5b2eff]/50 bg-[#5b2eff]/15 text-[#a78bfa]'
                : 'text-slate-400 hover:text-white'
                " @click="authType = 1">
                Zarejestruj się
            </button>
        </div>

        <div class="grid gap-3 sm:grid-cols-3">
            <button type="button"
                class="flex h-12 items-center justify-center gap-2 rounded-lg border border-[#5b2eff]/55 bg-transparent px-4 text-sm font-semibold text-slate-100 transition hover:border-[#a78bfa] hover:bg-[#5b2eff]/10">
                <span class="text-base text-[#a78bfa]" aria-hidden="true"><svg
                        className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
                Google
            </button>
            <button type="button"
                class="flex h-12 items-center justify-center gap-2 rounded-lg border border-[#5b2eff]/55 bg-transparent px-4 text-sm font-semibold text-slate-100 transition hover:border-[#a78bfa] hover:bg-[#5b2eff]/10">
                <span class="text-base text-[#a78bfa]" aria-hidden="true"><svg
                        className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
                Facebook
            </button>
            <button type="button"
                class="flex h-12 items-center justify-center gap-2 rounded-lg border border-[#5b2eff]/55 bg-transparent px-4 text-sm font-semibold text-slate-100 transition hover:border-[#a78bfa] hover:bg-[#5b2eff]/10">
                <span class="text-base text-[#a78bfa]" aria-hidden="true"><svg
                        className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
                    </svg>
                </span>
                Apple
            </button>
        </div>

        <div class="flex items-center gap-4 text-sm text-slate-400">
            <span class="h-px flex-1 bg-white/15"></span>
            <span>lub kontynuuj z</span>
            <span class="h-px flex-1 bg-white/15"></span>
        </div>

        <div class="space-y-5">
            <label class="block space-y-2">
                <span class="text-sm font-medium text-slate-100">Email</span>
                <span class="relative block">
                    <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                        aria-hidden="true">
                        @
                    </span>
                    <input type="email" autocomplete="email" placeholder="Wpisz swój adres e-mail"
                        class="h-12 w-full rounded-lg border border-white/15 bg-[#11131c] pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#a78bfa] focus:ring-2 focus:ring-[#5b2eff]/30" />
                </span>
            </label>

            <label class="block space-y-2">
                <span class="text-sm font-medium text-slate-100">Hasło</span>
                <span class="relative block">
                    <span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                        aria-hidden="true">
                        #
                    </span>
                    <input :type="marker" autocomplete="current-password" placeholder="Wpisz swoje hasło"
                        class="h-12 w-full rounded-lg border border-white/15 bg-[#11131c] pl-10 pr-20 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#a78bfa] focus:ring-2 focus:ring-[#5b2eff]/30" />
                    <button type="button" v-if="marker === 'password'"
                        class="absolute right-3 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-xs font-semibold text-[#a78bfa] transition hover:text-white"
                        @click="toggleMarker">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeWidth="2"
                                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                            <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                    <button type="button" v-else
                        class="absolute right-3 top-1/2 -translate-y-1/2 rounded px-2 py-1 text-xs font-semibold text-[#a78bfa] transition hover:text-white"
                        @click="toggleMarker">


                    </button>
                </span>
            </label>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-3">
            <label class="relative text-slate-300 flex cursor-pointer items-center justify-center gap-3 ml-6"
                for="heart">
                <input class="peer appearance-none" id="heart" name="heart" type="checkbox" />
                <span
                    class="absolute left-0 top-1/2 h-6 w-6 -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#FF91AF]">
                </span>
                <svg class="absolute left-0 top-1/2 h-5 w-5 -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:1000] [stroke-dashoffset:1000] peer-checked:[stroke-dashoffset:0]"
                    viewBox="0 0 68 87" fill="transparent" height="87" width="68" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M28.048 74.752c-.74 0-3.428.03-3.674-.175-3.975-3.298-10.07-11.632-12.946-15.92C7.694 53.09 5.626 48.133 3.38 42.035 1.937 38.12 1.116 35.298.93 31.012c-.132-3.034-.706-7.866 0-10.847C2.705 12.67 8.24 7.044 15.801 7.044c1.7 0 3.087-.295 4.55.875 4.579 3.663 5.515 8.992 7.172 14.171.142.443 3.268 6.531 2.1 7.698-.362.363-1.161-10.623-1.05-12.071.26-3.37 1.654-5.522 3.15-8.398 3.226-6.205 7.617-7.873 14.52-7.873 2.861 0 5.343-.274 8.049 1.224 16.654 9.22 14.572 23.568 5.773 37.966-1.793 2.934-3.269 6.477-5.598 9.097-1.73 1.947-4.085 3.36-5.774 5.424-2.096 2.562-3.286 5.29-5.598 7.698-4.797 4.997-9.56 10.065-14.522 14.872-1.64 1.588-10.194 6.916-10.672 7.873-.609 1.217 2.76-.195 4.024-.7"
                        stroke-width="4px" pathLength="1000" stroke="#FF91AF"></path>
                </svg>

                <p class="text-[1em] font-semibold [user-select:none]">Zapamiętaj mnie</p>
            </label>

            <button type="button" class="text-sm font-semibold text-[#a78bfa] transition hover:text-white">
                Nie pamiętasz hasła?
            </button>
        </div>

        <button type="submit"
            class="h-12 w-full rounded-lg bg-[#5b2eff] text-sm font-bold text-white shadow-lg shadow-[#5b2eff]/25 transition hover:bg-[#7047ff] focus:outline-none focus:ring-2 focus:ring-[#a78bfa] focus:ring-offset-2 focus:ring-offset-[#0d0e14]">
            {{ authType === 0 ? 'Zaloguj się' : 'Zarejestruj się' }}
        </button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const authType = ref(0)
const marker = ref<'password' | 'text'>('password')

function toggleMarker() {
    marker.value = marker.value === 'password' ? 'text' : 'password'
}
</script>
