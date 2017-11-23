<template>
  <section class="container">
    <div v-for="(post, pIndex) in posts">
      <nuxt-link :to="post.link|trimDomain" class="index-post-link"><PostCard :post="post"/></nuxt-link>
      <adsbygoogle v-if="!(((pIndex - 1 )% 5) || ((pIndex - 1 )% 2))" ad-format="fluid" ad-slot="6401011266" data-ad-layout-key="-du+a-2v-16+dl" class="infeed"/>
    </div>
  </section>
</template>

<script>

import PostCard from '~/components/card/ListedPost'
import URL from 'url'
// import PostLoader from '~/assets/data/post-loader'

export default {
  async asyncData () {
    const posts = await import('~/assets/data/dev-hinanet-posts-all.json') // PostLoader.posts
    return {
      posts
    }
  },
  components: {
    PostCard
  },
  filters: {
    trimDomain (url) {
      return URL.parse(url).pathname
    }
  }
}
</script>

<style scoped>
  .index-post-link {
    text-decoration: none;
  }
</style>
