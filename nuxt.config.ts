// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss'],
  image: {
    sirv: {
      baseURL: 'https://demo.sirv.com'
    }
  }
})
