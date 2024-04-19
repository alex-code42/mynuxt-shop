// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    plugins: ["~/server/index.ts"],
  },

  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
  },
  app: {
    head:{
      title: 'My Nuxt.js TailwindCSS Project',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'Everything about Nuxt 3, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt.js TailwindCSS' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
