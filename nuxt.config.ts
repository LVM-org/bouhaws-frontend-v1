// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/styles/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  //   modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],

  //   pinia: {
  //     autoImports: [
  //       // automatically imports `defineStore`
  //       "defineStore", // import { defineStore } from 'pinia'
  //       ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
  //     ],
  //   },
})
