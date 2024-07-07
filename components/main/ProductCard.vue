<script setup>
import { usePiniaStore } from "../../store";

const store = usePiniaStore();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const toggleLike = () => {
  store.addLikedProducts(props.product);
};

const toggleBasket = () => {
  store.addToKorzina(props.product);
};

const isInKorzina = computed(() => {
  return store.basket.some((p) => p.id === props.product.id);
});

const isLiked = computed(() => {
  return store.likedProducts.some((p) => p.id === props.product.id);
});

const router = useRouter();
</script>

<template>
  <div>
    <div
      @click="router.push(`/products/${props.product.id}`)"
      class="relative p-5 border rounded-md shadow-lg cursor-pointer"
    >
      <button @click.stop="toggleLike" class="absolute right-0 text-3xl">
        <button v-if="isLiked">❤️</button>
        <button v-else>🤍</button>
      </button>

      <div>
        <img :src="props.product.image" alt="" class="w-[90%]" />
        <p class="text-[20px] font-medium py-3 h-[90px]">
          {{ props.product.description }}
        </p>
        <div class="flex justify-between items-end z-40">
          <div class="py-3">
            <p class="text-[#454545] line-through">
              {{ props.product.sale }} ₽
            </p>
            <p class="text-[20px] font-semibold">{{ props.product.price }}₽</p>
          </div>
          <div class="py-3">
            <button
              @click.stop="toggleBasket"
              class="bg-[#454545] px-4 rounded-2xl py-2 z-50"
            >
              <Icon
                v-if="isInKorzina"
                name="material-symbols:delete-outline"
                width="24"
                height="24"
                style="color: white"
                class="md:text-2xl"
              />
              <Icon
                v-else
                name="vaadin:cart-o"
                width="24"
                height="24"
                style="color: white"
                class="md:text-2xl"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
