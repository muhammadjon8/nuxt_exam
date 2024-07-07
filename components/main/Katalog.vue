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
  <div class="container py-6 max-sm:px-3">
    <div class="flex justify-between cursor-pointer group py-6">
      <h2 class="text-[#454545] text-3xl font-bold">Каталог</h2>
      <nuxt-link
        to="/catalog"
        class="flex items-center gap-2 border rounded-lg py-2 px-4 border-black max-sm:hidden hover:bg-[#454545] hover:text-white"
      >
        <button>Весь каталог</button>
        <i
          class="bx bx-right-arrow-alt group-hover:translate-x-2 duration-200 hover:bg-[#454545] hover:text-white"
        ></i>
      </nuxt-link>
    </div>
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
