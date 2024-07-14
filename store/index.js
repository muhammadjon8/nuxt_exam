export const usePiniaStore = defineStore("pinia", {
  state() {
    return {
      likedProducts: [],
      basket: [],
      orders: [],
    };
  },
  actions: {
    addLikedProducts(product) {
      const index = this.likedProducts.findIndex((p) => p.id === product.id);
      if (index == -1) {
        this.likedProducts.push(product);
      } else {
        this.likedProducts.splice(index, 1);
      }
    },
    addToKorzina(product, quantity) {
      const index = this.basket.findIndex((p) => p.id === product.id);
      if (index == -1) {
        this.basket.push({ ...product, quantity: quantity || 1 });
      } else {
        this.basket.splice(index, 1);
      }
    },
    removeProductBasket(id) {
      this.basket = this.basket.filter((p) => p.id !== id);
    },
    addOrder(order) {
      this.orders.push(order);
      this.basket = [];
    },
  },
  persist: true,
});
