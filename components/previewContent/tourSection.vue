<template>
  <div class="preview-tour-section">
    <div class="mb-2">標題文字</div>
    <div class="flex">
      <div v-for="(tour, index) in tourList" :key="index" class="preview-tour-section__tour">
        <div class="preview-tour-section__tour-image"></div>
        <div class="p-1">
          <div class="text-gray-900 text-xs">{{ tour.title }}</div>
          <div class="text-sm">$1,000</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tourSection',
  props: {
    tourList: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.preview-tour-section {
  @apply p-4;
  &__tour {
    @apply border border-gray-200 rounded;
    $perColumn: 3;
    $spaceBetween: .5rem;
    margin: 0 $spaceBetween / 2 $spaceBetween;
    width: calc((100% / #{$perColumn}) - #{$spaceBetween});
  }
  &__tour-image {
    @apply bg-gray-100;
    height: 100px;
  }
}
</style>
