<script setup></script>

<template>
  <div class="container py-9 max-sm:px-3">
    <div class="flex items-center gap-3">
      <nuxt-link to="/" class="text-[#454545] py-4">Главная ></nuxt-link>
      <p>Контакты</p>
    </div>
    <div class="md:flex py-9">
      <div class="md:w-1/2">
        <h2 class="text-[#454545] text-6xl font-bold py-5">Контакты</h2>
      </div>
      <div class="flex flex-col gap-10 md:w-1/2 md:items-end">
        <div class="flex flex-col gap-5">
          <h3 class="text-2xl font-semibold">8 (800) 890-46-56</h3>
          <p class="text-[20px] font-normal">
            Пн-Пт: 10:00 до 19:00 <br />
            Сб-Вс: заказ через корзину <br />
            Телефоны: 
          </p>
        </div>
      </div>
    </div>
  </div>
  <MainMap />
  <div class="container relative flex justify-center">
    <div
      class="md:absolute bg-[#454545] max-sm:bg-[#FFFFFF] max-sm:w-[400px] md:flex justify-between items-center px-6 py-8 gap-10 bottom-10 md:text-white"
    >
      <div class="py-2">
        <p>Адрес магазина</p>
        <p>г. Москва, Дмитровское шоссе д.100с2</p>
      </div>
      <div class="py-2">
        <p>Почта</p>
        <p>NORNLIGHT@mail.ru</p>
      </div>
      <div class="py-2">
        <p>Телефон</p>
        <p>8 (800) 890-46-56</p>
      </div>
      <div class="py-5">
        <nuxt-link
          to="/order"
          class="px-5 py-3 max-sm:bg-[#454545] bg-white rounded-full text-black max-sm:text-white"
        >
          <button class="">Оставить заявку</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
