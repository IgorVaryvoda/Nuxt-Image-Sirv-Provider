// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  image: {
    providers: {
      sirv: {
        name: 'sirv',
        provider: '~/providers/sirv',
        options: {
          baseURL: 'https://cdn.earthroulette.com'
        }
      }
    },
  }
})
