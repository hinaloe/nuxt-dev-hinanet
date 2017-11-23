<template>
  <article class="card" itemscope itemtype="http://schema.org/BlogPosting">
    <h1 itemprop="headline">{{post.title.rendered}}</h1>
    <div class="post-meta">
      published: <time itemprop="datePublished" :datetime="post.date">{{publishedDate}}</time> /
      updated: <time itemprop="dateModified" :datetime="post.date">{{modifiedDate}}</time>
      <span itemprop="author" itemtype="http://schema.org/Person" itemscope>by <img src="~/assets/img/gravatar_64.png" style="width: 20px;height: 20px;border-radius: 50%;margin-right: 5px;" itemprop="image"/> <span itemprop="name">hinaloe</span>.</span>
    </div>
    <div>
      <div v-html="post.content.rendered"></div>
    </div>
    <div class="post-footer">
      <share-field :url="post.link" :title="post.title.rendered">
        <share-twitter/>
        <share-fb/>
        <share-hateb/>
        <share-wsapi/>
      </share-field>
    </div>
  </article>
</template>
<style src="~/assets/css/card.css" scoped></style>
<style scoped>
  .post-meta {
    font-size: .8em;
    margin-bottom: 16px;
  }
</style>
<script>
  import ShareField from '../share/share-field.vue'
  import ShareTwitter from '../share/share-twitter.vue'
  import ShareWsapi from '../share/share-web-share.vue'
  import ShareHateb from '../share/share-hateb.vue'
  import ShareFb from '../share/share-facebook.vue'

  export default {
    components: {
      ShareFb,
      ShareHateb,
      ShareWsapi,
      ShareTwitter,
      ShareField
    },
    props: {post: {}},
    computed: {
      publishedDate () {
        return formatDate(this.post.date)
      },
      modifiedDate () {
        return formatDate(this.post.modified)
      }
    }
  }

  function formatDate (date) {
    const d = new Date(date)
    return `${d.getFullYear()}年 ${d.getMonth() + 1}月${d.getDate()}日`
  }
</script>