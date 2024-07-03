<script setup></script>

<template>
  <div class="bg-[#F2F2F2] my-10">
    <div class="container">
      <div class="flex">
        <div class="w-1/3">
          <div class="flex items-center gap-3 py-9">
            <img src="/logo.png" alt="" class="h-[27px] w-[27px]" />
            <h1 class="text-[29px] font-normal">NORNLIGHT</h1>
          </div>
          <p class="text-2xl text-[#454545] font-semibold my-5">
            8 (800) 890-46-56
          </p>
          <img src="/payments.png" alt="" class="w-1/2" />
          <p class="font-semibold text-[#454545] py-3 text-xl">
            Политика конфидециальности
          </p>
          <p class="font-semibold text-[#454545] py-3 text-xl">
            Пользовательское соглашение
          </p>
          <div class="flex gap-2 py-5">
            <button
              v-for="i in 3"
              :key="i"
              class="p-3 border rounded-full border-black"
            >
              VK
            </button>
          </div>
        </div>
        <div class="flex justify-around w-1/2 gap-10">
          <div class="py-9 flex flex-col">
            <h4 class="text-2xl text-[#454545] font-bold pb-5">Покупателям</h4>
            <button class="ftr_btn">О компании</button>
            <button class="ftr_btn">Доставка и оплата</button>
            <button class="ftr_btn">Возврат</button>
            <button class="ftr_btn">Гарантии</button>
            <button class="ftr_btn">Контакты</button>
            <button class="ftr_btn">Блог</button>
          </div>
          <div class="flex gap-16 items-center">
            <div class="py-9 flex flex-col">
              <h4 class="text-2xl text-[#454545] font-bold pb-5">Товары</h4>
              <button class="ftr_btn">Люстры</button>
              <button class="ftr_btn">Светильники</button>
              <button class="ftr_btn">Бра</button>
              <button class="ftr_btn">Торшеры</button>
              <button class="ftr_btn">Комплектуюшие</button>
              <button class="ftr_btn">Настольные лампы</button>
            </div>
            <div class="py-14 flex flex-col">
              <button class="ftr_btn">Споты</button>
              <button class="ftr_btn">Трековые светильники</button>
              <button class="ftr_btn">Уличные светильники</button>
              <button class="ftr_btn">Технические светильники</button>
              <button class="ftr_btn">Светодиодные ленты</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ftr_btn {
  @apply text-[#454545] py-3 font-semibold text-left;
}
</style>
