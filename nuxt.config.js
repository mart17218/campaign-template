export default {
  head: {
    title: 'campaign-template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/css/main.scss',
    '~/assets/css/_variables.scss',
    'material-icons/iconfont/material-icons.scss'
  ],
  styleResources: {
    scss: ['~/assets/css/_variables.scss']
  },
  plugins: [
    { src: '~/plugins/quasar', ssr: false }
  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    '@nuxtjs/style-resources'
  ],
  build: {
  }
}
