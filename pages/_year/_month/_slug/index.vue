<template>
  <div class="container">
    <post-card :post="post"></post-card>
    <adsbygoogle ad-slot="5965062840" />
    <h2>こちらもオススメ</h2>
    <nuxt-link :to="r.url|trimDomain" v-for="r in post['jetpack-related-posts']" :key="r.id"><listed-post :post="{title:{rendered:r.title},date:r.date}" view="related"></listed-post></nuxt-link>
  </div>
</template>
<script>
  import PostCard from '~/components/card/Article.vue'
  // import PostLoader from '~/assets/data/post-loader'
  import ListedPost from '../../../../components/card/ListedPost.vue'
  import URL from 'url'

  import striptags from 'striptags'

  const fetchMediaInfo = process.server ? (id) => require(`~/assets/data/media/${id}.json`) : () => {}

  export default {
    async asyncData ({params, error, redirect}) {
      /**
       * @type *[] posts
       */
      const posts = await import('~/assets/data/dev-hinanet-posts-all.json') // PostLoader.posts
      const postI = Array.findIndex(posts, (post) => decodeURIComponent(post.slug) === params.slug)
      if (postI === -1) {
        return error({statusCode: 404, message: 'ページが見つかりません'})
      }
      const post = posts[postI]
      const postDate = new Date(post.date)
      if (postDate.getFullYear() !== +params.year || postDate.getMonth() + 1 !== +params.month) {
        return redirect(`/${postDate.getFullYear()}/${String.padStart(postDate.getMonth() + 1, 2, '0')}/${post.slug}/`)
      }
      if (process.server && post.featured_media) {
        post.thumbnail = fetchMediaInfo(post.featured_media)
      }
      return {post, prev: posts[postI + 1], next: posts[postI - 1]}
    },
    data () {
      return {}
    },
    head () {
      const meta = [
        {name: 'description', content: striptags(this.post.title.rendered), hid: 'description'},
        {property: 'og:title', content: striptags(this.post.title.rendered)},
        {property: 'og:description', content: striptags(this.post.excerpt.rendered)},
        {name: 'twitter:site', content: '@hnle0'},
        {name: 'twitter:creator', content: '@hnle0'}
      ]
      if (this.post.thumbnail) {
        meta.push(
          {property: 'og:image', content: this.post.thumbnail.link},
          {name: 'twitter:card', content: 'summary_large_image'}
        )
      } else {
        meta.push({name: 'twitter:card', content: 'summary'})
      }

      const link = []

      if (this.prev) {
        link.push({rel: 'prev', title: striptags(this.prev.title.rendered), href: this.prev.link})
      }
      if (this.next) {
        link.push({rel: 'next', title: striptags(this.next.title.rendered), href: this.next.link})
      }

      return {meta, title: striptags(this.post.title.rendered), link}
    },
    validate ({params}) {
      return /^\d{4}$/.test(params.year) && /^\d{2}$/.test(params.month)
    },
    components: {
      ListedPost,
      PostCard
    },
    filters: {
      trimDomain (url) {
        return URL.parse(url).pathname
      }
    }

  }
</script>