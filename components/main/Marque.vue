<script setup>
const speed = ref(10);

const speedUp = () => {
  if (speed.value > 1) {
    speed.value--;
  }
};

const speedDown = () => {
  if (speed.value < 10) {
    speed.value++;
  }
};
</script>

<template>
  <div class="container py-5 max-sm:px-3">
    <div class="flex justify-between cursor-pointer group py-6">
      <h2 class="text-[#454545] text-3xl font-bold">
        Только проверенные бренды
      </h2>
      <div class="flex gap-2 max-sm:hidden">
        <i
          class="bx bx-left-arrow-alt border px-4 text-xl"
          @click="speedDown"
        ></i>
        <i
          class="bx bx-right-arrow-alt border px-4 text-xl"
          @click="speedUp"
        ></i>
      </div>
    </div>
    <Vue3Marquee
      :duration="speed"
    >
      <img src="/marque1.png" alt="" class="px-2 h-2/3" />
      <img src="/marque2.png" alt="" class="px-2 h-2/3" />
      <img src="/marque3.png" alt="" class="px-2 h-2/3" />
    </Vue3Marquee>
  </div>
</template>

<style scoped></style>
