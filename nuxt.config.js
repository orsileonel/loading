export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    titleTemplate: 'Leonel Orsi - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:100,300,400,700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '@/components/loading/Loading.vue',
  /*
  ** Global SCSS
  */
  styleResources: {
    scss: [
      '@/assets/scss/_app.scss'
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/scss/global.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/google-analytics', {
      id: 'UA-144261142-1',
      dev: false
    }],
    [
      'nuxt-i18n', {
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            name: 'English',
            file: 'en.js'
          },
          {
            code: 'es',
            iso: 'es-AR',
            name: 'Español',
            file: 'es.js'
          }
        ],
        lazy: true,
        langDir: 'locales/',
        seo: true,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'locale',
          alwaysRedirect: true,
          fallbackLocale: 'en'
        },
        vuex: {
          moduleName: 'i18n',
          syncLocale: true,
          syncMessages: true,
          syncRouteParams: true
        }
      }
    ],
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
