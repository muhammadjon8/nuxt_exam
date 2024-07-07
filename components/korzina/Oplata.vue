<script setup>
import { usePiniaStore } from "../store";

const store = usePiniaStore();

const totalPrice = computed(() => {
  return store.basket.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
});
</script>

<template>
  <div v-if="store.basket.length > 0" class="container max-sm:px-3">
    <div class="bg-[#F2F2F2F2] p-5 rounded-xl">
      <h2 class="text-3xl text-[#454545] py-5">Оплата</h2>
      <div class="flex max-sm:flex-col gap-9 mx-4">
        <div class="flex gap-3">
          <p>Товары.............................................</p>
          <p>{{ totalPrice }}₽</p>
        </div>
        <div class="flex gap-3">
          <p>Доставка.............................................</p>
          <p>580₽</p>
        </div>
      </div>
      <p class="mx-4 text-3xl py-5 font-bold">{{ totalPrice + 580 }}₽</p>
      <div class="md:flex gap-7 items-center mx-4">
        <button
          class="py-3 max-sm:w-full w-1/4 bg-[#454545] text-white font-bold rounded-full"
        >
          Купить
        </button>
        <div class="flex gap-3 items-center">
          <Icon
            name="el:ok-circle"
            width="256"
            height="256"
            style="color: black"
          />
          <p>Я согласен наобработку моих персональных данных</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
