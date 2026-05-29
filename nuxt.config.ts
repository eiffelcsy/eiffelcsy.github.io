export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      'JetBrains Mono': { wght: [400, 500, 600] },
      Newsreader: {
        ital: [400, 500],
        wght: [400, 500, 600],
      },
      'EB Garamond': {
        ital: [400, 500],
        wght: [400, 500, 600],
      },
    },
    display: 'swap',
    preconnect: true,
    download: false,
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: 'github-light',
          langs: ['python', 'typescript', 'javascript', 'bash', 'json', 'yaml'],
        },
      },
    },
  },

  css: ['~/assets/css/global.css'],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  app: {
    head: {
      title: 'Eiffel Chong — AI researcher',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AI researcher working at the intersection of world models, embodied intelligence, and computer vision.' },
      ],
      htmlAttrs: {
        lang: 'en',
        'data-aesthetic': 'mono-serif',
        'data-theme': 'light',
      },
    },
  },
})
