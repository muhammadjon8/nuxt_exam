<script setup>
const data = ref([
  {
    name: "Люстры",
    price: "540₽",
    image: "/lyustra.png",
  },
  {
    name: "Светильники",
    price: "540₽",
    image: "/lyustra1.png",
  },
  {
    name: "Бра",
    price: "540₽",
    image: "/lyustra2.png",
  },
  {
    name: "Торшеры",
    price: "540₽",
    image: "/lyustra3.png",
  },
  {
    name: "Настольные лампы",
    price: "540₽",
    image: "/lyustra4.png",
  },
  {
    name: "Споты",
    price: "540₽",
    image: "/lyustra5.png",
  },
]);
</script>

<template>
  <div class="container max-sm:px-3">
            <h2 class="text-[#454545] text-6xl font-bold py-5">Каталог</h2>

    <div class="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
      <MainCatalogCard
        v-for="(item, index) in data"
        :key="index"
        :catalog="item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
