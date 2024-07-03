<template>
  <div class="relative py-9 px-5">
    <div class="mx-auto flex justify-center items-center">
      <div class="relative">
        <img
          :src="currentImage"
          :alt="`Slider Image ${currentIndex + 1}`"
          class="max-w-full h-auto"
        />
        <div class="absolute bottom-0 left-0 right-0 flex justify-end mb-4 pr-5">
          <div class="flex">
            <template v-for="(image, index) in images" :key="index">
              <button
                @click="changeSlide(index)"
                :class="[
                  'h-[6px] w-[6px] mx-1 rounded-full',
                  {
                    'bg-[#454545]': currentIndex === index,
                    'bg-gray-300': currentIndex !== index,
                  },
                ]"
              ></button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: ["/karusel.png", "/karusel.png", "/karusel.png","/karusel.png", "/karusel.png", "/karusel.png", "/karusel.png", "/karusel.png"],
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
  methods: {
    changeSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style></style>
