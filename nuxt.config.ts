const tailwindConfig = require('./tailwind.config')

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: tailwindConfig
})
