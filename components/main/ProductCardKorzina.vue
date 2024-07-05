<script setup>
import { usePiniaStore } from "../../store";

const store = usePiniaStore();
const props = defineProps({
  product: Object,
});
const toggleLike = () => {
  store.addLikedProducts(props.product);
};
const isLiked = computed(() => {
  const index = store.likedProducts.findIndex((p) => p.id == props.product.id);
  return index == -1;
});
</script>

<template>
  <div>
    <div class="relative p-5 border rounded-md shadow-lg">
      <button @click="toggleLike" class="absolute right-0 text-3xl">
        <Icon v-if="isLiked" name="ph:heart-fill" width="24" height="24" style="color: gray" />
        <Icon v-else name="ph:heart-fill" width="24" height="24" style="color: red" />
      </button>

      <img :src="product.image" alt="" />
      <p class="text-[20px] font-medium py-3 h-[90px]">
        {{ product.description }}
      </p>
      <div class="flex justify-between items-end">
        <div class="py-3">
          <p class="text-[#454545] line-through">{{ product.sale }} ₽</p>
          <p class="text-[20px] font-semibold">{{ product.price }}₽</p>
        </div>
        <div class="py-3">
          <button class="bg-[#454545] px-4 rounded-2xl py-1">
            <i class="bx bx-cart text-white text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
