<template>
  <div class="share-wrap">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'share-field',
  props: {
    url: {
      type: String
    },
    title: {
      type: String
    }
  }
}
</script>
<style scoped>
  .share-wrap >>> .share-btn {
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 8px;
  }

  .share-wrap >>> .share-btn > svg {
    vertical-align: top;
  }
</style>