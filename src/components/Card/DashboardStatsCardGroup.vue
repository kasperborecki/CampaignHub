<template>
  <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
    <StatCard
      color="#8B5CF628"
      iconSvgColor="8B5CF6"
      :count="6"
      icon-svg="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z"
      title="Moje kampani"
      sub-icon-svg="M12 6v13m0-13 4 4m-4-4-4 4"
      uphill-text="3 w trakcje realizacji"
    />
    <StatCard
      color="#22C55E28"
      iconSvgColor="22C55E"
      :count="27"
      icon-svg="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
      title="Twórcy w moich kampaniach"
      sub-icon-svg="M12 6v13m0-13 4 4m-4-4-4 4"
      uphill-text="5 nowych w tym miesiącu"
    />
    <StatCard
      color="#F59E0B28"
      iconSvgColor="F59E0B"
      :count="12"
      icon-svg="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"
      title="Aktywne zadania"
      sub-icon-svg="M12 6v13m0-13 4 4m-4-4-4 4"
      uphill-text="4 wymagają uwagi"
    />
    <StatCard
      color="#0EA5E928"
      iconSvgColor="0EA5E9"
      :count="8"
      icon-svg="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      title="Zadnia na dziś"
      sub-icon-svg="adawd"
      uphill-text="8 z 14 zaplanowanych"
    />
  </div>
</template>

<script setup lang="ts">
import StatCard from './StatCard.vue'
</script>
