// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-05-11',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  googleFonts: {
    families: {
      Kanit: [300, 400, 500, 600, 700, 800],
    },
  },
  icon: {
    provider: 'iconify',
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dqx4sss9s/image/upload',
    },
  },
})
