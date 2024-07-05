<script setup>
import { usePiniaStore } from "../../store";

const store = usePiniaStore();
</script>

<template>
  <div
    class="sticky top-0 left-0 backdrop-blur-lg bg-white/30 md:py-5 max-sm:pb-3 max-sm:px-3 z-50"
  >
    <div class="container">
      <div class="flex justify-between gap-3 items-center max-sm:py-3">
        <img src="/menu.png" alt="" class="md:hidden w-8 h-4" />
        <nuxt-link to="/" class="flex items-center gap-3">
          <img src="/logo.png" alt="" class="h-[27px] w-[27px]" />
          <h1 class="md:text-[29px] font-normal">NORNLIGHT</h1>
        </nuxt-link>
        <div class="flex gap-3 justify-center">
          <button
            class="bg-[#454545] text-white px-6 py-2 rounded-full hidden lg:flex"
          >
            <nuxt-link
              to="/catalog"
              class="flex justify-between gap-2 items-center"
            >
              <img src="/katalogIcon.png" alt="" class="h-3" />
              <p class="">Каталог</p>
            </nuxt-link>
          </button>

          <div
            class="border rounded-xl mx-1 items-center flex w-full max-sm:hidden"
          >
            <input
              type="text"
              class="px-2 rounded-lg py-1 outline-none w-[600px] backdrop-blur-lg bg-white/30"
              placeholder="Поиск по товарам"
            />
            <i class="bx bx-search px-2"></i>
          </div>
        </div>
        <div class="flex gap-3 cursor-pointer relative">
          <div class="absolute w-4 h-2 md:ml-11 md:bottom-11 max-sm:ml-4">
            <p
              class="bg-red-500 text-center rounded-full text-white text-[12px]"
            >
              {{ store.likedProducts.length }}
            </p>
          </div>
          <nuxt-link to="/likedProducts" class="flex flex-col items-center">
            <i class="bx bx-heart text-[20px] max-sm:text-3xl"></i>
            <p class="max-sm:hidden">Избранное</p>
          </nuxt-link>
          <div class="flex flex-col items-center cursor-pointer max-sm:hidden">
            <i class="bx bx-bar-chart text-[20px]"></i>
            <p class="max-sm:hidden">Сравнение</p>
          </div>
          <div
            class="absolute w-4 h-2 md:ml-[220px] md:bottom-11 max-sm:ml-[60px]"
          >
            <p
              class="bg-red-500 text-center rounded-full text-white text-[12px]"
            >
              {{ store.basket.length }}
            </p>
          </div>
          <nuxt-link
            to="/korzina"
            class="flex flex-col items-center cursor-pointer"
          >
            <i class="bx bx-cart text-[20px] max-sm:text-3xl"></i>
            <p class="max-sm:hidden">Корзина</p>
          </nuxt-link>
        </div>
      </div>
      <div class="border rounded-xl mx-1 items-center flex w-full md:hidden">
        <input
          type="text"
          class="px-2 rounded-lg py-1 outline-none w-[600px] backdrop-blur-lg bg-white/30"
          placeholder="Поиск по товарам"
        />
        <i class="bx bx-search px-2"></i>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
