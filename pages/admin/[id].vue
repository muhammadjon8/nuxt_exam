<script setup>
definePageMeta({
  layout: "admin",
  middleware: ["auth"],
});
import axios from "axios";
const route = useRoute();
const loading = ref(true);
const router = useRouter();
const newProduct = ref({
  title: "",
  newPrice: "",
  oldPrice: "159.0",
  image: "",
  description: "",
});

function updateProduct() {
  try {
    axios.put(
      `https://6684e64e56e7503d1ae18994.mockapi.io/products/products/${route.params.id}`,
      newProduct.value
    );
    router.push("/admin/manage-product");
    console.log("Succes");
  } catch (error) {
    console.error(error);
  }
}
const fetchProduct = () => {
  loading.value = true;
  axios
    .get(
      `https://6684e64e56e7503d1ae18994.mockapi.io/products/products/${route.params.id}`,
      {}
    )
    .then((res) => {
      newProduct.value = res.data;
    });
};
fetchProduct();
onMounted(() => {
  fetchProduct();
});

console.log(newProduct.value);
</script>

<template>
  <div class="ml-[30px]">
    <h1 class="text-[28px]">Create Product</h1>
    <div class="mt-[20px]">
      <p class="text-[16px]">Title</p>
      <input
        class="w-[620px] text-[18px] p-[10px] h-[50px] bg-[#F8F8F8] rounded-[10px] mt-[10px]"
        v-model="newProduct.title"
        required
        type="text"
      />
    </div>
    <div class="mt-[20px]">
      <p class="text-[16px]">Price</p>
      <input
        class="w-[620px] text-[18px] p-[10px] h-[50px] bg-[#F8F8F8] rounded-[10px] mt-[10px]"
        v-model="newProduct.newPrice"
        required
        type="text"
      />
    </div>
    <div class="mt-[20px]" :model="newProduct">
      <p class="text-[16px]">Image-url</p>
      <input
        class="w-[620px] text-[18px] p-[10px] h-[50px] bg-[#F8F8F8] rounded-[10px] mt-[10px]"
        v-model="newProduct.image"
        required
        type="text"
      />
    </div>
    <div class="mt-[20px]">
      <p class="text-[16px]">Description</p>
      <input
        class="w-[620px] text-[18px] pl-[10px] pt-[30px] h-[50px] pb-[120px] bg-[#F8F8F8] rounded-[10px] mt-[10px]"
        v-model="newProduct.description"
        required
        type="text"
      />
    </div>
    <button
      @click="updateProduct"
      type="submit"
      class="w-[180px] h-[50px] bg-[#454545] rounded-[8px] text-[#fff] mt-[20px]"
    >
      Update
    </button>
  </div>
</template>

<style scoped></style>
