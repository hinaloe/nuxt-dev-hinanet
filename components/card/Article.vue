<template>
  <article class="card">
    <h1>{{post.title.rendered}}</h1>
    <div class="post-meta">
      published: <span itemprop="datePublished" :datetime="post.date">{{publishedDate}}</span> /
      updated: <span itemprop="datePublished" :datetime="post.date">{{modifiedDate}}</span>
    </div>
    <div>
      <div v-html="post.content.rendered"></div>
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
  export default {
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