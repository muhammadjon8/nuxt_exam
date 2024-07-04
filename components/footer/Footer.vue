<script setup></script>

<template>
  <div class="bg-[#F2F2F2] my-10">
    <div class="container max-sm:px-3">
      <div class="md:flex">
        <div class="md:w-1/3">
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
        <div class="md:flex justify-around md:w-1/2 gap-10">
          <div class="py-9 flex flex-col">
            <h4 class="text-2xl text-[#454545] font-bold pb-5">Покупателям</h4>
            <nuxt-link to="/about_us" class="ftr_btn">О компании</nuxt-link>
            <nuxt-link to="/delivery" class="ftr_btn">Доставка и оплата</nuxt-link>
            <nuxt-link to="" class="ftr_btn">Возврат</nuxt-link>
            <nuxt-link to="" class="ftr_btn">Гарантии</nuxt-link>
            <nuxt-link to="" class="ftr_btn">Контакты</nuxt-link>
            <nuxt-link to="" class="ftr_btn">Блог</nuxt-link>
          </div>
          <div class="md:flex gap-16 items-center">
            <div class="md:py-9 flex flex-col">
              <h4 class="text-2xl text-[#454545] font-bold pb-5">Товары</h4>
              <nuxt-link to="" class="ftr_btn">Люстры</nuxt-link>
              <nuxt-link to="" class="ftr_btn">Светильники</nuxt-link>
              <nuxt-link to="" class="ftr_btn">Бра</nuxt-link>
              <nuxt-link to="" class="ftr_btn">Торшеры</nuxt-link>
              <nuxt-link to="" class="ftr_btn">Комплектуюшие</nuxt-link>
              <nuxt-link to="" class="ftr_btn">Настольные лампы</nuxt-link>
            </div>
            <div class="md:py-14 flex flex-col">
              <nuxt-link to="" class="ftr_btn">Споты</nuxt-link>
              <nuxt-link to="" class="ftr_btn">Трековые светильники</nuxt-link>
              <nuxt-link to="" class="ftr_btn">Уличные светильники</nuxt-link>
              <nuxt-link to="" class="ftr_btn">Технические светильники</nuxt-link>
              <nuxt-link to="" class="ftr_btn">Светодиодные ленты</nuxt-link>
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
