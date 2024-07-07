<script setup>
import { usePiniaStore } from "../store";

const store = usePiniaStore();
console.log(store.basket);

function decrement(item) {
  if (item.quantity > 0) {
    item.quantity--;
  }
}
function remove(item) {
  const index = store.basket.findIndex((p) => p.id == item.id);
  store.basket.splice(index, 1);
}
</script>

<template>
  <div class="container max-sm:hidden">
    <div class="flex items-center gap-3">
      <nuxt-link to="/" class="text-[#454545] py-4">Главная ></nuxt-link>

      <nuxt-link to="/catalog" class="text-[#454545] py-4"
        >Каталог >
      </nuxt-link>
      <p>Корзина ></p>
    </div>
    <div class="py-9">
      <div class="md:w-1/2">
        <h2 class="text-[#454545] text-6xl font-bold py-5">Корзина</h2>
      </div>
      <div
        v-if="store.basket.length == 0"
        class="flex justify-center items-center flex-col mt-[100px]"
      >
        <Icon
          name="game-icons:cardboard-box"
          width="256"
          height="256"
          class="text-9xl"
        />
        <p class="text-[#454545] text-xl font-medium ml-4">
          Вы не выбрали товара на Корзина
        </p>
      </div>
    </div>
    <table v-if="store.basket.length > 0" class="bg-[#F2F2F2] rounded-lg">
      <thead class="py-5">
        <tr class="border-b">
          <th class="py-5 text-gray-500">Фото</th>
          <th class="py-5 text-gray-500">Товары</th>
          <th class="py-5 text-gray-500 w-2/4">Описание</th>
          <th class="py-5 text-gray-500">Артикул</th>
          <th class="py-5 text-gray-500">Количество</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b" v-for="item in store.basket" :key="item.id">
          <td class="p-5">
            <img
              :src="item.image"
              alt="Product Image"
              class="h-[80px] w-[100px] rounded"
            />
          </td>
          <td>
            <div class="flex flex-col gap-5 justify-between">
              <p class="font-semibold text-xl text-[#454545] px-2">
                {{ item.description }}
              </p>
              <p class="font-bold text-xl">{{ item.price * item.quantity }} ₽</p>
            </div>
          </td>
          <td class="font-normal text-start">{{ item.about }}</td>
          <td class="px-3">{{ item.artikul }}</td>
          <td class="px-3">
            <div class="flex gap-3">
              <button @click="decrement(item)" class="text-3xl">-</button>
              <p class="border p-5">{{ item.quantity }}</p>
              <button @click="item.quantity++" class="text-3xl">+</button>
            </div>
          </td>
          <td class="px-5">
            <button @click="remove(item)">
              <Icon
                name="material-symbols:delete-outline"
                width="24"
                height="24"
                style="color: black"
                class="text-2xl"
              />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="md:hidden container max-sm:px-3">
    <div class="flex items-center gap-3">
      <nuxt-link to="/" class="text-[#454545] py-4">Главная ></nuxt-link>

      <nuxt-link to="/catalog" class="text-[#454545] py-4"
        >Каталог >
      </nuxt-link>
      <p>Корзина ></p>
    </div>
    <div class="md:w-1/2">
      <h2 class="text-[#454545] text-6xl max-sm:text-3xl font-bold py-5">Корзина</h2>
    </div>
    <div
      v-if="store.basket.length == 0"
      class="flex justify-center items-center flex-col mt-[100px]"
    >
      <Icon
        name="game-icons:cardboard-box"
        width="256"
        height="256"
        class="text-9xl"
      />
      <p class="text-[#454545] text-xl font-medium ml-4">
        Вы не выбрали товара на Корзина
      </p>
    </div>
  </div>
  <div class="md:hidden px-3" v-for="item in store.basket" :key="item.id">
    <div class="flex bg-[#F2F2F2] rounded-lg py-5">
      <div class="w-1/4 px-2 py-3">
        <img :src="item.image" alt="" class="rounded" />
      </div>
      <div class="mx-5">
        <p class="font-semibold text-xl text-[#454545]">
          {{ item.description }}
        </p>
        <p class="font-bold text-2xl text-[#454545]">
          {{ item.price * item.quantity }} ₽
        </p>
        <p class="font-normal text-start text-[#454545]">
          {{ item.about }}
        </p>
        <div class="flex justify-between">
          <div class="flex gap-3">
            <button @click="decrement(item)" class="text-3xl">-</button>
            <p class="border p-5">{{ item.quantity }}</p>
            <button @click="item.quantity++" class="text-3xl">+</button>
          </div>
          <button @click="remove(item)">
            <Icon
              name="material-symbols:delete-outline"
              width="24"
              height="24"
              style="color: black"
              class="text-2xl"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Add your styles here */
</style>
