<template>
  <div class="preview-text-section">
    <template v-if="getStatus === ALIGN_LEFT">
      <div class="preview-text-section__image"></div>
      <div class="flex items-center w-2/3">
        <div>{{ content }}</div>
      </div>
    </template>
    <template v-else-if="getStatus === ALIGN_RIGHT">
      <div class="flex items-center w-2/3">
        <div>{{ content }}</div>
      </div>
      <div class="preview-text-section__image"></div>
    </template>
    <template v-else-if="getStatus === ALIGN_CENTER">
      <div class="flex items-center justify-center w-full">
        <div class="text-center">{{ content }}</div>
      </div>
    </template>
  </div>
</template>

<script>

export default {
  props: {
    mode: {
      type: String
    },
    content: {
      type: String,
      default: '文字'
    }
  },
  data() {
    return {
      ALIGN_LEFT: 'left',
      ALIGN_RIGHT: 'right',
      ALIGN_CENTER: 'center'
    }
  },
  computed: {
    getStatus() {
      const status = {
        [this.ALIGN_LEFT]: this.ALIGN_LEFT,
        [this.ALIGN_RIGHT]: this.ALIGN_RIGHT,
        [this.ALIGN_CENTER]: this.ALIGN_CENTER
      }
      return status[this.mode] || this.ALIGN_LEFT
    }
  }
}
</script>

<style lang="scss" scoped>
.preview-text-section {
  @apply flex px-4 py-4;
  min-height: 140px;
  &__image {
    @apply bg-gray-100 mr-4 w-1/3;
  }
}
</style>
