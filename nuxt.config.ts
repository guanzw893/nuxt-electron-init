export default defineNuxtConfig({
  ssr: false,
  router: {
    options: {
      hashMode: true
    }
  },
  app: {
    baseURL: './'
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-electron'
  ],
  piniaPersistedstate: {
    storage: 'sessionStorage'
  },
  electron: {
    build: [
      {
        entry: 'electron/main.ts'
      },
      {
        entry: 'electron/preload.ts',
        onstart(options: { reload: () => void }) {
          options.reload()
        }
      }
    ],
    renderer: {}
  },
  vite: {
    server: {
      middlewareMode: false
    }
  }
})
