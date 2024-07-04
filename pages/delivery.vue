<script setup></script>

<template>
  <div class="container py-9 max-sm:px-3">
    <div class="flex items-center gap-3">
      <nuxt-link to="/" class="text-[#454545] py-4">Главная ></nuxt-link>

      <p>Доставка и оплата</p>
    </div>
    <div class="md:flex py-9">
      <div class="md:w-1/2">
        <h2 class="text-[#454545] text-6xl font-bold py-5">
          Доставка <br />
          и оплата
        </h2>
      </div>
      <div class="flex flex-col gap-10 md:w-1/2">
        <div class="flex flex-col gap-5">
          <h3 class="text-2xl font-semibold">Доставка</h3>
          <p class="text-[20px] font-normal">
            Мы осуществляем доставку со склада по Москве и Московской области
            собственной курьерской службой. Транспортными компаниями нашу
            продукцию мы доставляем по всей территории РФ, а так же по всем
            странам СНГ. Сроки доставки: 4—6 недель
          </p>
        </div>
        <div class="flex flex-col gap-5">
          <h3 class="text-2xl font-semibold">Курьерская доставка</h3>
          <p class="text-[20px] font-normal">
            БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽. Заказы
            свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД
          </p>
        </div>
        <div class="flex flex-col gap-5">
          <h3 class="text-2xl font-semibold">Самовывоз</h3>
          <p class="text-[20px] font-normal">
            Любой заказ можно забрать самостоятельно по адресу:  г.
            Москва, Дмитровское шоссе д.100с2
          </p>
        </div>
      </div>
    </div>
  </div>
  <MainMap  class="w-full"/>
</template>

<style scoped></style>
