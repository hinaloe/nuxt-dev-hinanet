<template>
  <div class="container">
    <post-card :post="post"></post-card>
    <h2>こちらもオススメ</h2>
    <nuxt-link :to="r.url|trimDomain" v-for="r in post['jetpack-related-posts']" :key="r.id"><listed-post :post="{title:{rendered:r.title},date:r.date}" view="related"></listed-post></nuxt-link>
  </div>
</template>
<script>
  import PostCard from '~/components/card/Article.vue'
  import PostLoader from '~/assets/data/post-loader'
  import ListedPost from '../../../../components/card/ListedPost.vue'
  import URL from 'url'

  export default {
    async asyncData ({params, error, redirect}) {
      /**
       * @type *[] posts
       */
      const posts = PostLoader.posts
      const post = Array.find(posts, (post) => decodeURIComponent(post.slug) === params.slug)
      if (!post) {
        return error({statusCode: 404, message: 'ページが見つかりません'})
      }
      const postDate = new Date(post.date)
      if (postDate.getFullYear() !== +params.year || postDate.getMonth() + 1 !== +params.month) {
        return redirect(`/${postDate.getFullYear()}/${String.padStart(postDate.getMonth() + 1, 2, '0')}/${post.slug}/`)
      }
      return {post: post}
    },
    data () {
      return {}
    },
    head () {
      return {title: this.post.title.rendered}
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