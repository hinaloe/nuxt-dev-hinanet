<template>
  <span class="share-btn share-hateb" title="はてなブックマーク" @click="onClick">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -1 20 20"><title>btn-touch</title><path style="fill:#fff" d="M11.86 10.53a3.56 3.56 0 0 0-2.5-1.12 4.07 4.07 0 0 0 2.07-1.14 3 3 0 0 0 .65-2 3.63 3.63 0 0 0-.43-1.79 3.22 3.22 0 0 0-1.27-1.23 5.39 5.39 0 0 0-1.73-.56 26.12 26.12 0 0 0-3.54-.19h-4.11v15h4.24a27.49 27.49 0 0 0 3.68-.17 6 6 0 0 0 1.89-.59 3.46 3.46 0 0 0 1.45-1.41 4.29 4.29 0 0 0 .51-2.12 3.85 3.85 0 0 0-.91-2.68zm-7.06-4.7h.88a4.16 4.16 0 0 1 2 .34 1.32 1.32 0 0 1 .52 1.19 1.23 1.23 0 0 1-.51 1.14 4.5 4.5 0 0 1-2.07.33h-.82zm3.48 8.6a4.18 4.18 0 0 1-2.05.37h-1.43v-3.28h1.49a3.91 3.91 0 0 1 2 .37 1.47 1.47 0 0 1 .55 1.32 1.31 1.31 0 0 1-.56 1.22z"/><circle  style="fill:#fff" cx="17.1" cy="15.6" r="1.9"/><path style="fill:#fff" d="M15.45 2.5h3.3v10h-3.3z"/></svg>
  </span>
</template>
<script>
  export default {
    name: 'share-hateb',
    methods: {
      onClick () {
        open(`http://b.hatena.ne.jp/entry/panel/?btitle=${encodeURIComponent(this.$parent.title)}&url=${encodeURIComponent(
          this.$parent.url)}`, '', 'width=540,height=300')
      }
    }
  }
</script>
<style scoped>
  .share-btn.share-hateb {
    background-color: #00a4de;
    padding-left: 5px;
    padding-right: 5px;
  }
</style>