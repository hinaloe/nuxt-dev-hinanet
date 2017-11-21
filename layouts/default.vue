<template>
  <div>
    <header>
      <nuxt-link to="/" class="site-title">dev.hinaloe.net</nuxt-link>
    </header>
    <nuxt/>
    <footer>
      <p class="container text-center">(c) 2011-2017 dev.hinaloe.net</p>
      <p class="container"><small>このサイトはほとんど更新されていません。なお、掲載コードは特記のない限りGPLv2+(WP関連のPHP)またはMIT LICENSEで利用可能です。詳しくは
        <a href="https://twitter.com/hnle0">@hnle0までお問い合せ</a>ください。</small></p>
    </footer>
  </div>
</template>

<style>
@import "sanitize.css";
html {
  font-family: "YuGothic", "Yu Gothic", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #ececec;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  max-width: 1080px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}


img {
  height: auto; /* Make sure images are scaled correctly. */
  width: auto;
  max-width: 100%; /* Adhere to container width. */
  max-height: 100vh;
}

figure {
  margin: 1em 0; /* Extra wide images within figure tags don't overflow the content area. */
}


embed,
iframe,
object {
  max-width: 100%;
}

/* Make sure logo link wraps around logo image. */
.custom-logo-link {
  display: inline-block;
}

.text-center {
  text-align: center;
}
</style>

<style scoped>
header {
  width: 100%;
  max-width: 1200px;
  height: 50px;
  box-shadow: 0 1px 0 rgba(0,0,0,.4);
  margin-left: auto;
  margin-right: auto;
  background: #fff;
}

header .site-title {
  text-decoration: none;
  color: #47494e;
  font-size: 2rem;
  padding-left: 2rem;
}

footer {
  border-top: solid 1px #5b5c65;
  background: #f2f2f2;
  margin-bottom: 0;
  padding: 10px;
}
</style>

<style src="~/assets/css/common.css"></style>

<script>
  import NuxtLink from '../.nuxt/components/nuxt-link'

  export default {
    components: {NuxtLink},
    head () {
      const canonical = `https://dev.hinaloe.net${this.$route.path}`

      const link = [
        {rel: 'canonical', href: canonical}
      ]

      link.forEach(l => {
        if (l.href.slice(-1) !== '/') {
          l.href = l.href + '/'
        }
      })

      return {
        link
      }
    }
  }
</script>