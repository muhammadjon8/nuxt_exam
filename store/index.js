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
    addToKorzina(product, quantity) {
      console.log("product", product);
      const index = this.basket.findIndex((p) => p.id === product.id);
      if (index == -1) {
        this.basket.push({ ...product, quantity: quantity || 1 });
      } else {
        this.basket.splice(index, 1);
      }
    },
  },
  persist: true,
});
