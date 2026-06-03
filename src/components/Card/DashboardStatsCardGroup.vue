<template>
    <div class="flex justify-between h-full">
        <StatCard color="oklch(17.7% 0.245 27.325)" :count="6" icon-svg="essa" title="Moje kampani"
            sub-icon-svg="M12 6v13m0-13 4 4m-4-4-4 4" uphill-text="3 w trakcje realizacji" />
        <StatCard color="essa" :count="27" icon-svg="essa" title="Twórcy w moich kampaniach"
            sub-icon-svg="M12 6v13m0-13 4 4m-4-4-4 4" uphill-text="5 nowych w tym miesiącu" />
        <StatCard color="essa" :count="12" icon-svg="essa" title="Aktywne zadania"
            sub-icon-svg="M12 6v13m0-13 4 4m-4-4-4 4" uphill-text="4 wymagają uwagi" />
        <StatCard color="essa" :count="8" icon-svg="essa" title="Zadnia na dziś" sub-icon-svg="adawd"
            uphill-text="8 z 14 zaplanowanych" />
    </div>
</template>
<script setup lang="ts">
import StatCard from './StatCard.vue';
</script>