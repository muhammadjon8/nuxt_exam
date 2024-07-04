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
</template>

<style scoped></style>
