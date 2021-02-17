<template>
  <div class="preview-link-section">
    <div class="mb-2">標題文字</div>
    <div class="flex">
      <div v-for="(article, index) in articleList" :key="index" class="preview-link-section__container">
        <div class="preview-link-section__image"></div>
        <div class="p-1">
          <div class="text-gray-900 text-xs">{{ article.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articleList: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.preview-link-section {
  @apply p-4;
  &__container {
    @apply border border-gray-200 flex rounded;
    $perColumn: 2;
    $spaceBetween: .5rem;
    margin: 0 $spaceBetween / 2 $spaceBetween;
    width: calc((100% / #{$perColumn}) - #{$spaceBetween});
  }
  &__image {
    @apply bg-gray-100;
    height: 50px;
    width: 50px;
  }
}
</style>
