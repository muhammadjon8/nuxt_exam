<script setup>
import axios from "axios";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { usePiniaStore } from "../../store";

const store = usePiniaStore();

const route = useRoute();
const id = route.params.id;

const item = ref(null);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(
      `https://6684e64e56e7503d1ae18994.mockapi.io/products/products/${id}`
    );
    item.value = response.data;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
});

const toggleLike = () => {
  store.addLikedProducts(item.value);
};

const toggleBasket = () => {
  store.addToKorzina(item.value);
};

const isInKorzina = computed(() => {
  return store.basket.some((p) => p.id === item.value.id);
});

const isLiked = computed(() => {
  return store.likedProducts.some((p) => p.id === item.value.id);
});
</script>

<template>
  <div class="container max-sm:px-3 py-9">
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error }}</div>
    <div v-if="item && !loading && !error" class="md:flex gap-10">
      <div class="md:w-1/2">
        <img :src="item.image" alt="" />
      </div>
      <div class="md:w-1/2 text-[#B3B3B3] flex flex-col gap-3">
        <h2 class="text-5xl pb-9 text-[#454545]">{{ item.description }}</h2>
        <p class="">Scott</p>
        <div class="flex justify-between">
          <p>Артикул: {{ item.artikul }}</p>
          <div class="flex gap-3">
            <button v-for="i in 5" :key="i">
              <Icon name="tabler:brand-ok-ru" width="256" height="256" />
            </button>
          </div>
        </div>
        <p class="text-green-500">В наличии</p>
        <div class="flex gap-10 items-center">
          <p class="text-3xl text-[#454545]">{{ item.price }}₽</p>
          <p class="line-through text-xl">{{ item.sale }}₽</p>
        </div>
        <p class="text-[#454545] text-xl py-5">{{ item.about }}</p>
        <div class="flex gap-5">
          <div
            @click.stop="toggleBasket"
            class="py-3 px-7 bg-[#454545] text-white rounded-xl"
          >
            <button v-if="!isInKorzina">В корзину</button>
            <button v-else>Удалит из корзину</button>
          </div>
          <div
            @click.stop="toggleLike"
            class="w-14 h-14 bg-[#F8F8F8] flex items-center justify-center rounded-xl"
          >
            <button v-if="isLiked" class="text-2xl">❤️</button>
            <button v-else class="text-2xl">🤍</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
