<script setup>
const isTrue = ref(false);

const showModal = () => {
  isTrue.value = true;
};
const hideModal = () => {
  isTrue.value = false;
};
</script>

<template>
  <MainModalka v-if="isTrue" :hideModal="hideModal" />
  <div class="max-sm:hidden container py-3">
    <div class="flex justify-between items-center">
      <div class="flex gap-4">
        <nuxt-link to="/about_us">О компании</nuxt-link>
        <nuxt-link to="/delivery">Доставка и оплата</nuxt-link>
        <nuxt-link to="/return">Возврат</nuxt-link>
        <nuxt-link to="/guarantee">Гарантии</nuxt-link>
        <nuxt-link to="/contacts">Контакты</nuxt-link>
        <nuxt-link to="/blog">Блог</nuxt-link>
      </div>
      <div class="flex gap-4 items-center">
        <p class="text-[#454545] font-semibold">8 (800) 890-46-56</p>
        <button @click="showModal">Заказать звонок</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
