<script setup>
const imgs = ref(["/blog1.png", "/blog2.png", "/blog3.png"]);
</script>

<template>
  <div class="container py-5 max-sm:px-3">
    <div class="flex justify-between cursor-pointer group py-6">
      <h2 class="text-[#454545] text-3xl font-bold">Блог</h2>
      <div
        class="flex items-center gap-2 border rounded-lg py-2 px-4 border-black max-sm:hidden"
      >
        <button>Перейти в блог</button>
        <i
          class="bx bx-right-arrow-alt group-hover:translate-x-2 duration-100"
        ></i>
      </div>
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
    <div
      class="flex items-center justify-center gap-2 border rounded-full py-5 px-4 border-black md:hidden mt-10"
    >
      <button>Перейти в блог</button>
      <i
        class="bx bx-right-arrow-alt group-hover:translate-x-2 duration-100"
      ></i>
    </div>
  </div>
</template>

<style scoped></style>
