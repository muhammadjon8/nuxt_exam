<script setup>
import axios from "axios";

const route = useRoute();
const id = route.params.id;

const item = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(`https://6684e64e56e7503d1ae18994.mockapi.io/products/products/${id}`);
    item.value = response.data;
  } catch (error) {
    console.error("Error fetching item:", error);
  }
});
</script>

<template>
  <div class="container max-sm:px-3 py-9">
    <div v-if="loading">Loading...</div>
    <div v-if="error">Error: {{ error }}</div>
    <div v-if="item && !loading && !error" class="flex items-center">
      <div class="w-1/2">
        <img :src="item.image" alt="" />
      </div>
      <div class="w-1/2">
        <h2>{{ item.description }}</h2>
        <p>Scott</p>
        <div class="flex justify-between">
          <p>Артикул: {{ item.artikul }}</p>
          <div class="flex gap-3">
            <button v-for="i in 5" :key="i">
              <Icon name="tabler:brand-ok-ru" width="256" height="256" />
            </button>
          </div>
        </div>
        <p class="text-green-500">В наличии</p>
        <div class="flex gap-10">
          <p>{{ item.price }}</p>
          <p class="line-through">
            {{ item.sale }}
          </p>
        </div>
        <p>{{ item.about }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
