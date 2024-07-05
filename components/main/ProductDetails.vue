<script setup>
const route = useRoute();
const id = route.params.id;

const { data: item } = await fetch(`https://api.example.com/items/${id}`);
</script>

<template>
  <div class="container max-sm:px-3 py-9">
    <div class="flex items-center">
      <div class="w-1/2">
        <img :src="item.image" alt="" />
      </div>
      <div class="w-1/2">
        <h2>{{ item.description }}</h2>
        <p>Scott</p>
        <div class="flex">
          <p>Артикул: {{ item.artikul }}</p>
          <div class="flex gap-3">
            <button v-for="i in 5" :key="i">
              <Icon name="tabler:brand-ok-ru" width="256" height="256" />
            </button>
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
  </div>
</template>

<style scoped></style>
