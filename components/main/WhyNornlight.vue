<script setup></script>

<template>
  <div class="container max-sm:px-3">
    <div class="flex justify-between cursor-pointer group py-6">
      <h2 class="text-[#454545] text-3xl font-bold">Почему NORNLIGHT</h2>
      <nuxt-link to="/about_us"
        class="flex items-center gap-2 border rounded-lg py-2 px-4 border-black max-sm:hidden hover:bg-[#454545] hover:text-white"
      >
        <button>О компании</button>
        <i
          class="bx bx-right-arrow-alt group-hover:translate-x-2 duration-100"
        ></i>
      </nuxt-link>
    </div>
    <div class="grid md:grid-cols-4 gap-5 max-sm:grid-cols-2">
      <div class="border md:p-9 max-sm:p-3">
        <img src="/why1.png" alt="" class="h-20 w-20" />
        <p class="font-semibold text-2xl mt-20 mb-5 max-sm:mt-10">
          Только проверенные бренды
        </p>
        <p class="font-light">Бренды, проверенные временем и качеством</p>
      </div>
      <div class="border md:p-9 max-sm:p-3">
        <img src="/why2.png" alt="" class="h-20 w-20" />
        <p class="font-semibold text-2xl mt-20 mb-5 max-sm:mt-10">
          Самые низкие <br />
          цены
        </p>
        <p class="font-light">Ниже не будет нигде</p>
      </div>
      <div class="border md:p-9 max-sm:p-3">
        <img src="/why3.png" alt="" class="h-20 w-20" />
        <p class="font-semibold text-2xl mt-20 mb-5 max-sm:mt-10">Быстрая доствка</p>
        <br class="max-sm:hidden"/>
        <p class="font-light">
          Доставляем по всей РФ <br class="max-sm:hidden" />
          за 1-10 дней
        </p>
      </div>
      <div class="border md:p-9 max-sm:p-3">
        <img src="/why4.png" alt="" class="h-20 w-20" />
        <p class="font-semibold text-2xl mt-20 mb-5 max-sm:mt-10">Большой ассортимент</p>
        <br class="max-sm:hidden">
        <p class="font-light">Более 1000 товаров</p>
      </div>
    </div>
    <nuxt-link to="/about_us"
      class="flex items-center justify-center gap-2 border rounded-full py-5 px-4 border-black md:hidden mt-10"
    >
      <button>О компании</button>
      <i
        class="bx bx-right-arrow-alt group-hover:translate-x-2 duration-100"
      ></i>
    </nuxt-link>
  </div>
</template>

<style scoped></style>
