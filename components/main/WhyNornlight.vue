<script setup></script>

<template>
  <div class="container">
    <div class="flex justify-between cursor-pointer group py-6">
      <h2 class="text-[#454545] text-3xl font-bold">Почему NORNLIGHT</h2>
      <div
        class="flex items-center gap-2 border rounded-lg py-2 px-4 border-black"
      >
        <button>О компании</button>
        <i
          class="bx bx-right-arrow-alt group-hover:translate-x-2 duration-100"
        ></i>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-5">
      <div class="border p-9">
        <img src="/why1.png" alt="" class="h-20 w-20" />
        <p class="font-semibold text-2xl mt-20 mb-5">
          Только проверенные бренды
        </p>
        <p class="font-light">Бренды, проверенные временем и качеством</p>
      </div>
      <div class="border p-9">
        <img src="/why2.png" alt="" class="h-20 w-20" />
        <p class="font-semibold text-2xl mt-20 mb-5">
          Самые низкие <br />
          цены
        </p>
        <p class="font-light">Ниже не будет нигде</p>
      </div>
      <div class="border p-9">
        <img src="/why3.png" alt="" class="h-20 w-20" />
        <p class="font-semibold text-2xl mt-20 mb-5">Быстрая доствка</p>
        <br />
        <p class="font-light">
          Доставляем по всей РФ <br />
          за 1-10 дней
        </p>
      </div>
      <div class="border p-9">
        <img src="/why4.png" alt="" class="h-20 w-20" />
        <p class="font-semibold text-2xl mt-20 mb-5">Большой ассортимент</p>
        <br />
        <p class="font-light">Более 1000 товаров</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
