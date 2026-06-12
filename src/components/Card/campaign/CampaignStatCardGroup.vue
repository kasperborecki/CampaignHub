<template>
  <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
    <StatCard
      color="#8B5CF628"
      iconSvgColor="8B5CF6"
      :count="6"
      icon-svg="M3 6a2 2 0 0 1 2-2h5.532a2 2 0 0 1 1.536.72l1.9 2.28H3V6Zm0 3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9H3Z"
      title="Wszystkie kampanie"
      sub-icon-svg="M12 6v13m0-13 4 4m-4-4-4 4"
      uphill-text="3 w tym miesiącu"
    />
    <StatCard
      color="#22C55E28"
      iconSvgColor="22C55E"
      :count="27"
      icon-svg="M8 18V6l8 6-8 6Z"
      title="W trakcie"
      sub-icon-svg="M12 6v13m0-13 4 4m-4-4-4 4"
      uphill-text="5 w tym miesiącu"
    />
    <StatCard
      color="#F59E0B28"
      iconSvgColor="F59E0B"
      :count="12"
      icon-svg="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
      title="Planowane"
      sub-icon-svg="M12 6v13m0-13 4 4m-4-4-4 4"
      uphill-text="4 w tym miesiącu"
    />
    <StatCard
      color="#0EA5E928"
      iconSvgColor="0EA5E9"
      :count="8"
      icon-svg="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      title="Zakończone"
      sub-icon-svg="adawd"
      uphill-text="w tym miesiącu"
    />
  </div>
</template>

<script setup lang="ts">
import StatCard from '../StatCard.vue'
</script>
