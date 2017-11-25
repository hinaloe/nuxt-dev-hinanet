<template><div class="container">
    <h2>年別アーカイブ {{$route.params.year}}年</h2>
    <div v-for="(post, pIndex) in posts">
        <nuxt-link :to="post.link|trimDomain" class="index-post-link"><PostCard :post="post"/></nuxt-link>
        <adsbygoogle v-if="!(((pIndex - 1 )% 5) || ((pIndex - 1 )% 2))" ad-format="fluid" ad-slot="6401011266" data-ad-layout-key="-du+a-2v-16+dl" class="infeed"/>
    </div>
</div></template>
<script>
  import PostCard from '~/components/card/ListedPost'
  import URL from 'url'

  export default {
    validate ({params}) {
      return Array.includes(['2011', '2012', '2013', '2014', '2015'], params.year)
    },
    async asyncData ({params}) {
      const posts = await import('~/assets/data/dev-hinanet-posts-all.json') // PostLoader.posts
      const filteredPosts = posts.filter(post => {
        return String.startsWith(post.date, params.year)
      })
      return {
        posts: filteredPosts
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