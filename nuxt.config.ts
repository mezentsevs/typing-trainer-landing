// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    typeCheck: true
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Typing Trainer - Master Touch Typing',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A full-stack SPA typing trainer for mastering touch-typing.' }
      ]
    }
  }
})
