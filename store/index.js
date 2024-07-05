export const usePiniaStore = defineStore("pinia", {
  state() {
    return {
      likedProducts: [],
      basket: [],
    };
  },
    action: {
      
  },
  persist: true,
});
