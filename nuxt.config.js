module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-dev-hinanet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Static version of dev.hinaloe.net' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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
    },
    vendor: ['~/assets/data/dev-hinanet-posts-all.json', '~/assets/data/post-loader']
  },
  generate: {
    routes () {
      const posts = require('./assets/data/dev-hinanet-posts-all.json')
      return posts.map(post => {
        const date = new Date(post.date)
        return `/${date.getFullYear()}/${('0' + (date.getMonth() + 1)).slice(-2)}/${post.slug}`
      })
    }
  }
}
