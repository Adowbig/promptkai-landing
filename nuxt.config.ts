// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    'motion-v/nuxt',
    'lenis/nuxt',
  ],
  ssr: false,
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],
  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'promptkai',
        'promptkai-dark',
        'info',
        'success',
        'warning',
        'error',
      ],
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-05-11',
  eslint: {
    config: {
      stylistic: true,
    },
  },

  fonts: {
    families: [
      { name: 'Kanit', provider: 'google', display: 'swap', global: true },
    ],
    provider: 'google',
    defaults: {
      weights: [200, 300, 400, 500, 700, 800, 900],
      preload: true,
      styles: ['normal'],
      subsets: ['latin', 'latin-ext', 'thai'],
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
