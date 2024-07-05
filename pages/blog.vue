<script setup>
const imgs = ref([
  "/blog1.png",
  "/blog2.png",
  "/blog3.png",
  "/blog1.png",
  "/blog2.png",
  "/blog3.png",
]);
</script>

<template>
  <div class="container py-9 max-sm:px-3">
    <div class="flex items-center gap-3">
      <nuxt-link to="/" class="text-[#454545] py-4">Главная ></nuxt-link>
      <p>Блог</p>
    </div>
    <div class="py-9">
      <div class="md:w-1/2">
        <h2 class="text-[#454545] text-6xl font-bold py-5">Блог</h2>
      </div>
      <div class="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
        <div v-for="(img, index) in imgs" :key="index" class="border rounded">
          <img :src="img" alt="" />
          <div class="flex justify-between py-3 items-center px-3">
            <p class="text-[#454545] text-[20px] font-semibold">
              Как правильно освещать дом снаружи?
            </p>
            <img src="/blog.png" alt="" class="w-4 h-4" />
          </div>
          <p class="py-3 px-3">01.01.2024</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
