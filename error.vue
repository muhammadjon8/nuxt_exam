<script>
</script>

<template v-if="error.statusCode === 404">
  <navbarTopHeader />
  <Navbar />
  <div class="container p-10 flex items-center flex-col">
    <div class="flex justify-center text-9xl font-bold m-10 text-gray-400">
      404
    </div>
    <p class="flex justify-center text-2xl font-semibold py-5 max-sm:text-xl">
      Похоже, ничего не нашлось :(
    </p>
    <nuxt-link to="/" class="px-5 py-3 bg-[#454545] rounded-full text-white">
      <button class="">На главную</button>
    </nuxt-link>
  </div>
</template>
<style></style>
