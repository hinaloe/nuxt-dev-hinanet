<template><div>
    月別アーカイブ {{$route.params.year}}年 {{$route.params.month}}月
</div></template>
<script>
  export default {
    validate ({params}) {
      return /^\d{4}$/.test(params.year) && /^\d{2}$/.test(params.month)
    }
  }
</script>