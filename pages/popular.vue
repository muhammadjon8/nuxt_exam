<script setup>
const { data, pending, error, refresh, clear } = await useFetch(
  "https://6684e64e56e7503d1ae18994.mockapi.io/products/products"
);
</script>

<template>
  <div class="container py-9 max-sm:px-3">
    <nuxt-link to="/" class="text-[#454545] py-4">Главная ></nuxt-link>
    <h2 class="text-[#454545] text-3xl font-bold py-5">Популярные товары</h2>

    <div class="grid grid-cols-4 gap-5 max-sm:grid-cols-2">
      <MainProductCard
        v-for="(product, index) in data"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped></style>
