<script setup>
const imgs = ref(["/blog1.png", "/blog2.png", "/blog3.png"]);
</script>

<template>
  <div class="container py-5">
    <div class="flex justify-between cursor-pointer group py-6">
      <h2 class="text-[#454545] text-3xl font-bold">Блог</h2>
      <div
        class="flex items-center gap-2 border rounded-lg py-2 px-4 border-black"
      >
        <button>Перейти в блог</button>
        <i
          class="bx bx-right-arrow-alt group-hover:translate-x-2 duration-100"
        ></i>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-5">
      <div v-for="(img, index) in imgs" :key="index" class="border rounded">
        <img :src="img" alt="" />
        <div class="flex justify-between py-3 items-center gap-5 px-3">
          <p class="text-[#454545] text-[20px] font-semibold">
            Как правильно освещать дом снаружи?
          </p>
          <img src="/blog.png" alt="" class="w-4 h-4 px-3" />
        </div>
        <p class="py-3 px-3">01.01.2024</p>
      </div>
    </div>
    <div class="flex py-11">
      <h3 class="w-1/2 text-5xl">
        Производство <br />
        светильников
      </h3>
      <p class="w-1/2 text-[20px] font-medium text-[#454545]">
        Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников
        для освещения вашего дома или офиса. У нас вы найдете разнообразные
        модели светильников, от современных и стильных до классических и
        элегантных. Мы предлагаем качественные и надежные светильники от лучших
        производителей, которые подарят вам комфорт и уют. <br /><br />
        Покупая светильники в нашем интернет-магазине, вы получаете отличное
        соотношение цены и качества. Мы осуществляем доставку по всей России,
        чтобы каждый клиент мог насладиться прекрасным светом и удобством
        покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис
        тепла и света с NORNLIGHT!
      </p>
    </div>
  </div>
</template>

<style scoped></style>
