<script setup>
import { usePiniaStore } from "../store";

const store = usePiniaStore();
</script>

<template>
  <div class="container max-sm:px-3">
    <div class="flex items-center gap-3">
      <nuxt-link to="/" class="text-[#454545] py-4">Главная ></nuxt-link>
    </div>
    <div class="">
      <div class="md:w-1/2">
        <h2 class="text-[#454545] text-6xl max-sm:text-3xl font-bold py-5">Избранные товары</h2>
      </div>
      <div class="grid grid-cols-4 gap-5 max-sm:grid-cols-2">
        <MainProductCard
          v-for="item in store.likedProducts"
          :product="item"
          :key="item.id"
        />
      </div>
      <div
        v-if="store.likedProducts.length == 0"
        class="flex justify-center items-center flex-col mt-[100px]"
      >
        <Icon
          name="game-icons:cardboard-box"
          width="256"
          height="256"
          class="text-9xl"
        />
        <p class="text-[#454545] text-xl font-medium ml-4">
          Вы не выбрали товара
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
