<template>
  <section class="container">
    <div v-for="post in posts">
      <nuxt-link :to="post.link|trimDomain" class="index-post-link"><PostCard :post="post"/></nuxt-link>
    </div>
  </section>
</template>

<script>

import NuxtLink from '../.nuxt/components/nuxt-link'
import PostCard from '~/components/card/ListedPost'
import URL from 'url'
import PostLoader from '~/assets/data/post-loader'

export default {
  data () {
    const posts = PostLoader.posts
    return {
      posts
    }
  },
  components: {
    NuxtLink,
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
