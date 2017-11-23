<template>
  <span class="share-btn share-facebook" title="facebookで共有" @click="onClick">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M24.4,6.56H7.6a1,1,0,0,0-1,1V24.4a1,1,0,0,0,1,1h9V18.13H14.18V15.28h2.46v-2.1a3.44,3.44,0,0,1,3.67-3.77,21.84,21.84,0,0,1,2.2.11v2.55H21c-1.18,0-1.41.56-1.41,1.39v1.82h2.82L22,18.13H19.59v7.31H24.4a1,1,0,0,0,1-1V7.6A1,1,0,0,0,24.4,6.56Z" style="fill:#fff"/></svg>  </span>
</template>
<script>
  export default {
    name: 'share-fb',
    methods: {
      onClick () {
        open(`https://www.facebook.com/sharer.php?s=100&p[title]=${encodeURIComponent(this.$parent.title)}&p[url]=${encodeURIComponent(
          this.$parent.url)}`, '', 'width=540,height=300')
      }
    }
  }
</script>
<style scoped>
  .share-btn.share-facebook {
    background-color: #3C5A99;
  }
</style>