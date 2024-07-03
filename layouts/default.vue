<script setup>
useHead({
  title: "Main page",
  link: {
    href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
    rel: "stylesheet",
  },
});
</script>

<template>
  <navbarTopHeader />
  <Navbar />
  <slot />
</template>

<style scoped></style>
