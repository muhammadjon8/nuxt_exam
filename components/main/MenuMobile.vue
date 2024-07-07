<script setup>
const props = defineProps({
  closeMenu: Function,
  isOpen: Boolean,
});
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
  <div class="fixed inset-0 bg-black/60 z-40">
    <div class="absolute top-0 left-0 bg-white w-full h-3/4 p-5">
      <button
        @click="props.closeMenu"
        class="text-end border px-2 absolute top-5 left-5"
      >
        X
      </button>
      <div class="flex flex-col gap-4 mt-10 justify-center items-center">
        <div class="border-b w-full text-center pb-5">
          <nuxt-link to="/about_us" @click="props.closeMenu" class=""
            >О компании</nuxt-link
          >
        </div>
        <div class="border-b w-full text-center pb-5">
          <nuxt-link to="/delivery" @click="props.closeMenu"
            >Доставка и оплата</nuxt-link
          >
        </div>
        <div class="border-b w-full text-center pb-5">
          <nuxt-link to="/return" @click="props.closeMenu">Возврат</nuxt-link>
        </div>
        <div class="border-b w-full text-center pb-5">
          <nuxt-link to="/guarantee" @click="props.closeMenu"
            >Гарантии</nuxt-link
          >
        </div>
        <div class="border-b w-full text-center pb-5">
          <nuxt-link to="/contacts" @click="props.closeMenu"
            >Контакты</nuxt-link
          >
        </div>
        <div class="border-b w-full text-center pb-5">
          <nuxt-link to="/blog" @click="props.closeMenu">Блог</nuxt-link>
        </div>
        <button
          class="bg-[#454545] text-white px-6 py-3 rounded-full lg:flex w-full"
        >
          <nuxt-link
            @click="props.closeMenu"
            to="/catalog"
            class="flex justify-center gap-2 items-center"
          >
            <img src="/katalogIcon.png" alt="" class="h-3" />
            <p class="">Каталог</p>
          </nuxt-link>
        </button>
        <p>8 (800) 890-46-56</p>
        <button @click="showModal">Заказать звонок</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>
