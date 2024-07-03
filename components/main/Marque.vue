<script setup></script>

<template>
  <div class="container py-5">
    <div class="flex justify-between cursor-pointer group py-6">
      <h2 class="text-[#454545] text-3xl font-bold">
        Только проверенные бренды
      </h2>
      <div class="flex gap-2">
        <i class="bx bx-left-arrow-alt border px-4 text-xl"></i>
        <i class="bx bx-right-arrow-alt border px-4 text-xl"></i>
      </div>
    </div>
    <Vue3Marquee>
      <img src="/marque1.png" alt="" class="px-2" />
      <img src="/marque2.png" alt="" class="px-2" />
      <img src="/marque3.png" alt="" class="px-2" />
    </Vue3Marquee>
  </div>
</template>

<style scoped></style>
