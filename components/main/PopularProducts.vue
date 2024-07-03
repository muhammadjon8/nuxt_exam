<script setup>
const { data, pending, error, refresh, clear } = await useFetch(
  "https://6684e64e56e7503d1ae18994.mockapi.io/products/products"
);
</script>

<template>
  <div class="container">
    <div class="flex justify-between cursor-pointer group py-6">
      <h2 class="text-[#454545] text-3xl font-bold">Популярные товары</h2>
      <div
        class="flex items-center gap-2 border rounded-lg py-2 px-4 border-black max-sm:hidden"
      >
        <button>Весь товары</button>
        <i
          class="bx bx-right-arrow-alt group-hover:translate-x-2 duration-100"
        ></i>
      </div>
    </div>
    <div v-if="pending">Loading...</div>
    <div class="grid grid-cols-4 gap-5 max-sm:grid-cols-2">
      <div
        v-for="item in data"
        :key="data.id"
        class="relative p-5 border rounded-md shadow-lg"
      >
        <p class="absolute right-0 text-3xl">🤍</p>
        <img :src="item.image" alt="" />
        <p class="text-[20px] font-medium py-3">{{ item.description }}</p>
        <div class="flex justify-between items-end">
          <div class="py-3">
            <p class="text-[#454545] line-through">{{ item.sale }} ₽</p>
            <p class="text-[20px] font-semibold">{{ item.price }}₽</p>
          </div>
          <div class="py-3">
            <button class="bg-[#454545] px-4 rounded-2xl py-1">
              <i class="bx bx-cart text-white text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-center gap-2 border rounded-full py-5 px-4 border-black md:hidden mt-10"
    >
      <button>Популярные товары</button>
      <i
        class="bx bx-right-arrow-alt group-hover:translate-x-2 duration-100"
      ></i>
    </div>
  </div>
</template>

<style scoped></style>
