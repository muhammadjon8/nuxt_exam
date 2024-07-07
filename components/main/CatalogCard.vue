<script setup>
const props = defineProps({
  catalog: Object,
});
</script>

<template>
  <div>
    <div
      class="md:flex bg-[#F2F2F2] p-8 max-sm:p-2 rounded-2xl hover:scale-105 duration-200 hover:bg-[#454545] hover:text-white h-full"
    >
      <div class="flex flex-col justify-between w-[45%]">
        <p class="text-[22px] font-medium">{{ catalog.name }}</p>
        <p>
          От {{ catalog.price }}
          <i class="bx bx-right-arrow-alt"></i>
        </p>
      </div>
      <img :src="catalog.image" alt="" class="md:w-[50%]" />
    </div>
  </div>
</template>

<style scoped></style>
