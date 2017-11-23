<template>
  <article class="card">
    <div v-if="thumbnail && post.thumbnail" class="list-thumb"></div>
    <div>
      {{post.title.rendered || '(no title)'}}
    </div>
    <div class="post-meta" v-if="view==='archive'">
      published: <span itemprop="datePublished" :datetime="post.date">{{publishedDate}}</span> /
      updated: <span itemprop="datePublished" :datetime="post.date">{{modifiedDate}}</span>
    </div>
    <div class="post-meta" v-else-if="view==='related'">
      {{post.date}}
    </div>
    <div v-if="post.excerpt && post.excerpt.rendered" v-html="post.excerpt.rendered" class="list-excerpt"></div>
    <span class="read-more">→ 続きを読む</span>

  </article>
</template>
<style src="~/assets/css/card.css" scoped></style>
<style scoped>
  a:hover .card, a:active .card {
    color: #313237;
    box-shadow: 0 10px 23px rgba(0, 0, 0, 0.23), 0 8px 8px rgba(0, 0, 0, 0.28);

  }

  .post-meta {
    font-size: .8rem;
  }

  .list-excerpt {
    margin-top: 10px;
    display: none;
  }

  @media (min-width: 768px) {
    .list-excerpt {
      display: block;
    }
  }

  .read-more {
    margin-left: .6rem;
  }
</style>
<script>
  export default {
    name: 'ListedPost',
    props: {
      post: {},
      view: {default: 'archive', type: String},
      thumbnail: {
        default: false,
        type: Boolean
      }
    },
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