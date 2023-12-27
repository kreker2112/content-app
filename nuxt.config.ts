// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: "localhost",
    https: false,
    port: 4040,
    url: "http://localhost:4040",
  },
  css: ["~/assets/main.scss"],
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
});
