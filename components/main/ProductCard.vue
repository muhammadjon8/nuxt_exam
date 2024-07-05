<script setup>
import { usePiniaStore } from "../../store";

const store = usePiniaStore();
const props = defineProps({
  product: Object,
});
const toggleLike = () => {
  store.addLikedProducts(props.product);
};
const toggleBasket = () => {
  store.addToKorzina(props.product);
};

const isInKorzina = computed(() => {
  const index = store.basket.findIndex((p) => p.id == props.product.id);
  return index == -1;
});

const isLiked = computed(() => {
  const index = store.likedProducts.findIndex((p) => p.id == props.product.id);
  return index == -1;
});
const router = useRouter();
</script>

<template>
  <div>
    <div
      @click="router.push(`/products/${product.id}`)"
      class="relative p-5 border rounded-md shadow-lg cursor-pointer"
    >
      <button @click="toggleLike" class="absolute right-0 text-3xl">
        <Icon
          v-if="isLiked"
          name="ph:heart-fill"
          width="24"
          height="24"
          style="color: gray"
          class="mr-4"
        />
        <Icon
          v-else
          name="ph:heart-fill"
          width="24"
          height="24"
          class="mr-4"
          style="color: red"
        />
      </button>

      <img :src="product.image" alt="" class="w-[90%]" />
      <p class="text-[20px] font-medium py-3 h-[90px]">
        {{ product.description }}
      </p>
      <div class="flex justify-between items-end">
        <div class="py-3">
          <p class="text-[#454545] line-through">{{ product.sale }} ₽</p>
          <p class="text-[20px] font-semibold">{{ product.price }}₽</p>
        </div>
        <div class="py-3">
          <button
            @click="toggleBasket"
            class="bg-[#454545] px-4 rounded-2xl py-2"
          >
            <Icon
              v-if="isInKorzina"
              name="vaadin:cart-o"
              width="24"
              height="24"
              style="color: white"
              class="text-2xl"
            />
            <Icon
              v-else
              name="material-symbols:delete-outline"
              width="24"
              height="24"
              style="color: white"
              class="text-2xl"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
