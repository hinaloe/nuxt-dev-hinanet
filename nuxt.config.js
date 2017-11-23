module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-dev-hinanet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Static version of dev.hinaloe.net' },
      { name: 'google-site-verification', content: '6oLXyXj48lESucZgjP4vJPbrRLnZ8bhJCkPSbvVEMIY' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    // Simple usage
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-6792321820110469'
    }],
    '@nuxtjs/sitemap'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      // config.module.rules.push({
      //   test: /src\/striptags\.js$/,
      //   loader: 'babel-loader',
      //   query: {
      //     presets: ['vue-app'],
      //     babelrc: false,
      //     cacheDirectory: true
      //   }
      // })
    },
    vendor: [
      // '~/assets/data/dev-hinanet-posts-all.json',
      // '~/assets/data/post-loader',
      'vue-lazyload',
      'striptags',
      '~/plugins/vue-lazyload'
    ]
  },
  plugins: [
    // '~/plugins/vue-lazyload',
    { src: '~/plugins/ga.js', ssr: false }
  ],
  generate: {
    routes
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://dev.hinaloe.net',
    generate: true,
    routes
  }

}

function routes () {
  const posts = require('./assets/data/dev-hinanet-posts-all.json')
  return posts.map(post => {
    const date = new Date(post.date)
    return `/${date.getFullYear()}/${('0' + (date.getMonth() + 1)).slice(-2)}/${decodeURIComponent(post.slug)}/`
  })
}
