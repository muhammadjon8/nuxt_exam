// nuxt.config.js
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  compatibilityDate: "2024-07-04",

  app: {
    head: {
      title: "Flip Page with 3D Design",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@splinetool/viewer@1.9.0/build/spline-viewer.css",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@splinetool/viewer@1.9.0/build/spline-viewer.min.js",
          type: "module",
        },
      ],
    },
  },
});
