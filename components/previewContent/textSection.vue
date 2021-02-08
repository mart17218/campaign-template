<template>
  <div class="preview-text-section">
    <div class="preview-text-section__image"></div>
    <div class="flex items-center w-2/3">
      <div>{{ mode }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: '預設文字'
    }
  }
}
</script>

<style lang="scss" scoped>
.preview-text-section {
  @apply flex px-4 py-8;
  &__image {
    @apply bg-gray-100 mr-4 w-1/3;
    height: 120px;
  }
}
</style>
