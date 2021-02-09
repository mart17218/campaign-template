<template>
  <div class="preview-banner" :style="`background-image: url('${url}')`"></div>
</template>

<script>
export default {
  props: {
    url: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.preview-banner {
  @apply bg-center bg-cover bg-gray-100 bg-no-repeat;
  height: 260px;
}
</style>
