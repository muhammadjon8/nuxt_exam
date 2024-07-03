<template>
  <div class="w-full flex justify-center">
    <div class="bg-second rounded-[50px] mt-8 w-[1714px]">
      <div class="container">
        <swiper
          :pagination="true"
          :loop="true"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="(item, index) in 7" :key="index">
            <div class="flex gap-[199px] mb-[47px]">
              <img src="/karusel.png" class="" alt="Candle" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/navigation";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import Swiper pagination module

const modules = [Autoplay, Pagination, Navigation];
</script>
<style scoped>
/* Swiper styles */
.swiper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
}
.swiper:active {
  cursor: grabbing;
}

/* Swiper slide styles */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-pagination {
  position: absolute;
  right: 20px; /* Adjust as needed */
  bottom: 20px; /* Adjust as needed */
}
</style>
