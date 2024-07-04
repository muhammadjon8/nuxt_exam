<script setup>
const { data, pending, error, refresh, clear } = await useFetch(
  "https://6684e64e56e7503d1ae18994.mockapi.io/products/products"
);
</script>

<template>
  <div class="container max-sm:px-3">
    <div class="flex justify-between cursor-pointer group py-6">
      <h2 class="text-[#454545] text-3xl font-bold">Популярные товары</h2>
      <nuxt-link to="/popular"
        class="flex items-center gap-2 border rounded-lg py-2 px-4 border-black max-sm:hidden"
      >
        <button>Весь товары</button>
        <i
          class="bx bx-right-arrow-alt group-hover:translate-x-2 duration-100"
        ></i>
      </nuxt-link>
    </div>
    <div class="grid grid-cols-4 gap-5 max-sm:grid-cols-2">
      <MainProductCard
        v-for="(product, index) in data"
        :key="index"
        :product="product"
      />
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
