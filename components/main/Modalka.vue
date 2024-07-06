<script setup>
const props = defineProps({
  hideModal: Function,
});
</script>

<template>
  <div class="fixed z-50 w-full">
    <div class="flex h-screen w-full bg-black/60 justify-center items-center">
      <div class="bg-white md:w-[500px] rounded-xl p-8 relative">
        <button
          @click="props.hideModal"
          class="text-end border px-2 absolute right-5"
        >
          X
        </button>
        <h1 class="text-4xl font-bold py-5">
          Заполните, <br />
          и мы перезвоним
        </h1>
        <div class="flex flex-col gap-3">
          <input
            type="text"
            placeholder="ФИО"
            class="py-2 px-4 w-full rounded-full border border-black"
          />
          <input
            type="text"
            placeholder="Телефон"
            class="py-2 px-3 w-full rounded-full border border-black"
          />
          <button
            class="w-full text-white bg-[#454545] py-2 px-2 rounded-full border border-black"
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
