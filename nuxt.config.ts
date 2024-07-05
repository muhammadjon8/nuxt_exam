// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  compatibilityDate: "2024-07-04",
});
