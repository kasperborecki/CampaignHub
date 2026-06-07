<template>
    <div class="w-full rounded-2xl bg-[#151821] px-6 py-4 text-white shadow-xl shadow-black/20">
        <div class="flex items-center justify-between">
            <p class="text-[18px] font-medium">Szybkie akcje</p>
        </div>
        <div class="flex justify-between px-8 mt-3">
            <div class="flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center rounded-xl w-18 h-18 mr-2"
                    :style="{ backgroundColor: '#8B5CF628' }">
                    <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                        :style="{ color: '#8B5CF6' }">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" />
                    </svg>
                </div>
                <p class="text-[14px] text-slate-400 mt-1">Dodaj</p>
                <p class="text-[14px] text-slate-400">twórcę</p>
            </div>
            <div class="flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center rounded-xl w-18 h-18 mr-2"
                    :style="{ backgroundColor: '#0EA5E928' }">
                    <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                        :style="{ color: '#0EA5E9' }">
                        <path fill="currentColor"
                            d="M4 9.05H3v2h1v-2Zm16 2h1v-2h-1v2ZM10 14a1 1 0 1 0 0 2v-2Zm4 2a1 1 0 1 0 0-2v2Zm-3 1a1 1 0 1 0 2 0h-2Zm2-4a1 1 0 1 0-2 0h2Zm-2-5.95a1 1 0 1 0 2 0h-2Zm2-3a1 1 0 1 0-2 0h2Zm-7 3a1 1 0 0 0 2 0H6Zm2-3a1 1 0 1 0-2 0h2Zm8 3a1 1 0 1 0 2 0h-2Zm2-3a1 1 0 1 0-2 0h2Zm-13 3h14v-2H5v2Zm14 0v12h2v-12h-2Zm0 12H5v2h14v-2Zm-14 0v-12H3v12h2Zm0 0H3a2 2 0 0 0 2 2v-2Zm14 0v2a2 2 0 0 0 2-2h-2Zm0-12h2a2 2 0 0 0-2-2v2Zm-14-2a2 2 0 0 0-2 2h2v-2Zm-1 6h16v-2H4v2ZM10 16h4v-2h-4v2Zm3 1v-4h-2v4h2Zm0-9.95v-3h-2v3h2Zm-5 0v-3H6v3h2Zm10 0v-3h-2v3h2Z" />
                    </svg>
                </div>
                <p class="text-[14px] text-slate-400 mt-1">Utwórz</p>
                <p class="text-[14px] text-slate-400">kampanię</p>
            </div>
            <div class="flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center rounded-xl w-18 h-18 mr-2"
                    :style="{ backgroundColor: '#22C55E28' }">
                    <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                        :style="{ color: '#22C55E' }">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z" />
                    </svg>
                </div>
                <p class="text-[14px] text-slate-400 mt-1">Utwórz</p>
                <p class="text-[14px] text-slate-400">zadanie</p>
            </div>
            <div class="flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center rounded-xl w-18 h-18 mr-2"
                    :style="{ backgroundColor: '#F59E0B28' }">
                    <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                        :style="{ color: '#F59E0B' }">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01" />
                    </svg>
                </div>
                <p class="text-[14px] text-slate-400 mt-1">Prześlij</p>
                <p class="text-[14px] text-slate-400">pliki</p>
            </div>
            <div class="flex flex-col items-center justify-center">
                <div class="flex flex-col items-center justify-center rounded-xl w-18 h-18 mr-2"
                    :style="{ backgroundColor: '#2A2F3D80' }">
                    <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                        :style="{ color: '#F5F6FA80' }">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 6h8m-8 4h12M6 14h8m-8 4h12" />
                    </svg>
                </div>
                <p class="text-[14px] text-slate-400 mt-1">Nowa</p>
                <p class="text-[14px] text-slate-400">notatka</p>
            </div>
        </div>
    </div>
</template>