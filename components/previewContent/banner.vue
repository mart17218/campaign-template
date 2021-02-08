<template>
  <div class="preview-banner"></div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.preview-banner {
  @apply bg-gray-100;
  height: 260px;
}
</style>
