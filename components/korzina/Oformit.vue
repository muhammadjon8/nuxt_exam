<script setup>
import { usePiniaStore } from "../store";

const store = usePiniaStore();
</script>

<template>
  <div v-if="store.basket.length > 0" class="container max-sm:px-3">
    <div class="bg-[#F2F2F2] p-5 rounded-lg">
      <h2 class="text-3xl text-[#454545] py-5">Оформление</h2>
      <div class="flex max-sm:flex-col justify-between gap-5 py-5 border-b mb-5">
        <input
          type="text"
          placeholder="ФИО"
          class="w-full py-2 px-4 rounded-full border border-black bg-[#F2F2F2]"
        />
        <input
          type="text"
          placeholder="Tелефон"
          class="w-full py-2 px-4 rounded-full border border-black bg-[#F2F2F2]"
        />
        <input
          type="text"
          placeholder="Электронная почта"
          class="w-full py-2 px-4 rounded-full border border-black bg-[#F2F2F2]"
        />
      </div>
      <h2 class="text-3xl text-[#454545] py-5">Доставка</h2>
      <div class="flex flex-col gap-5 mb-10">
        <input
        type="text"
        placeholder="Электронная почта"
        class="md:w-[60%] py-2 px-4 rounded-full border border-black bg-[#F2F2F2]"
      />

      <textarea
        type="text"
        placeholder="Комментарий"
        class="md:w-[60%] h-[200px] py-2 px-4 rounded-3xl border border-black bg-[#F2F2F2] resize-none"
      />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
