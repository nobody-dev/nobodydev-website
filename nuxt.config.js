export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nobodydev',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    }],
  },
  css: [],
  plugins: [],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],
  axios: {},
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.js',
      },
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru.js',
      },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      alwaysRedirect: true,
      fallbackLocale: 'en',
      onlyOnRoot: false,
      useCookie: true,
      cookieCrossOrigin: false,
      cookieDomain: null,
      cookieKey: 'i18n_redirected',
      cookieSecure: false,
    },
    lazy: true,
    langDir: '@/locales/',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  telemetry: false,
}
