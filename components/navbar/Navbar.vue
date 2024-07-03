<script setup></script>

<template>
  <div
    class="sticky top-0 left-0 z-10 backdrop-blur-lg bg-white/30 py-5 max-sm:px-3"
  >
    <div class="container">
      <div class="flex justify-between gap-3 items-center max-sm:py-3">
        <img src="/menu.png" alt="" class="md:hidden w-8 h-4" />
        <nuxt-link to="/">
          <div class="flex items-center gap-3">
            <img src="/logo.png" alt="" class="h-[27px] w-[27px]" />
            <h1 class="md:text-[29px] font-normal">NORNLIGHT</h1>
          </div>
        </nuxt-link>
        <div class="flex gap-3 justify-center">
          <button
            class="bg-[#454545] text-white px-6 py-2 rounded-full hidden lg:flex"
          >
            <div class="flex justify-between gap-2 items-center">
              <img src="/katalogIcon.png" alt="" class="h-3" />
              <p class="">Каталог</p>
            </div>
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
        <div class="flex gap-3 cursor-pointer">
          <div class="flex flex-col items-center">
            <i class="bx bx-heart text-[20px] max-sm:text-3xl"></i>
            <p class="max-sm:hidden">Избранное</p>
          </div>
          <div class="flex flex-col items-center cursor-pointer max-sm:hidden">
            <i class="bx bx-bar-chart text-[20px]"></i>
            <p class="max-sm:hidden">Сравнение</p>
          </div>
          <div class="flex flex-col items-center cursor-pointer">
            <i class="bx bx-cart text-[20px] max-sm:text-3xl"></i>
            <p class="max-sm:hidden">Корзина</p>
          </div>
        </div>
      </div>
      <div
          class="border rounded-xl mx-1 items-center flex w-full"
        >
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
