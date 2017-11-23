<template>
  <div class="pagenav">
    <nuxt-link :to="next.link | trimDomain" class="card nav-item nav-next" v-if="next">
      ← NEXT <span v-if="next.title && next.title.rendered">: {{next.title.rendered}}</span>
    </nuxt-link>
    <nuxt-link :to="prev.link | trimDomain" class="card nav-item nav-prev" v-if="prev">
      PREV <span v-if="prev.title && prev.title.rendered">: {{prev.title.rendered}}</span> →
    </nuxt-link>

  </div>
</template>
<script>
  import URL from 'url'
  export default {
    name: 'PageNavi',
    props: {
      next: {},
      prev: {}
    },
    filters: {
      trimDomain (url) {
        return URL.parse(url).pathname
      }
    }
  }
</script>
<style scoped src="~/assets/css/card.css"></style>
<style scoped>
  .pagenav {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .nav-item {
    display: inline-block;
    /*margin-left: 5px;*/
    /*margin-right: 5px;*/
    flex: 0 1 48%;
  }
  .nav-next {
  }
  .nav-prev {
    text-align: right;
    margin-left: auto;
  }
</style>