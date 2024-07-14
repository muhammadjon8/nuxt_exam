<script setup>
definePageMeta({
  layout: "admin",
});
const router = useRouter();
const newProduct = {
  title: "",
  newPrice: "",
  oldPrice: "159.0",
  image: "",
  description: "",
};

function createProduct() {
  try {
    axios.post(
      "https://66855e79b3f57b06dd4c795c.mockapi.io/products",
      newProduct
    );
    router.push("/admin/dashboard");
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div>
    <h1>Admin Dashboard</h1>
    <p>Welcome to the admin dashboard!</p>
  </div>
</template>
