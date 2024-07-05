export const usePiniaStore = defineStore("pinia", {
  state() {
    return {
      likedProducts: [],
      basket: [],
    };
  },
  actions: {
    addLikedProducts(product) {
      console.log("product", product);
      const index = this.likedProducts.findIndex((p) => p.id === product.id);
      if (index == -1) {
        this.likedProducts.push(product);
      } else {
        console.log("Product already exists in liked products");
        this.likedProducts.splice(index, 1);
      }
    },
  },
  persist: true,
});
