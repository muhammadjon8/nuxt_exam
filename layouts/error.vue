<script setup>
useHead({
  title: "Error page",
  link: {
    href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
    rel: "stylesheet",
  },
});
</script>

<template>
  <div>
    <navbarTopHeader />
    <Navbar />
    <slot />
  </div>
</template>

<style scoped></style>
