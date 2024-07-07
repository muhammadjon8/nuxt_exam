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
  {
    name: "Трековые светильники",
    price: "540₽",
    image: "/lyustra6.png",
  },
  {
    name: "Уличные светильники",
    price: "540₽",
    image: "/lyustra7.png",
  },
  {
    name: "Технические светильники",
    price: "540₽",
    image: "/lyustra8.png",
  },
  {
    name: "Светодиодные ленты",
    price: "540₽",
    image: "/lyustra9.png",
  },
  {
    name: "Комплектуюшие",
    price: "540₽",
    image: "/lyustra10.png",
  },
]);
</script>

<template>
  <div class="container max-sm:px-3">
    <h2 class="text-[#454545] text-6xl font-bold py-5">Каталог</h2>

    <div class="grid grid-cols-3 gap-4 max-sm:grid-cols-2">
      <MainCatalogCard
        v-for="(item, index) in data.slice(0, 9)"
        :key="index"
        :catalog="item"
      />
    </div>
    <div class="flex max-sm:flex-col gap-4 py-5">
      <MainCatalogCard
        v-for="(item, index) in data.slice(9, 11)"
        :key="index"
        :catalog="item"
      />
    </div>
    <MainMarque />
    <MainBlog />
    <MainBlog2 />
  </div>
</template>

<style lang="scss" scoped></style>
