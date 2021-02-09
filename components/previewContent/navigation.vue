<template>
  <div class="preview-navigation" :class="getStatus">
    <span class="material-icons-round text-sm">menu</span>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String
    }
  },
  data() {
    return {
      MODE_DARK: 'dark',
      MODE_LIGHT: 'light'
    }
  },
  computed: {
    getStatus() {
      const status = {
        [this.MODE_DARK]: this.MODE_DARK,
        [this.MODE_LIGHT]: this.MODE_LIGHT
      }
      return status[this.mode] || this.MODE_DARK
    }
  }
}
</script>

<style lang="scss" scoped>
.preview-navigation {
  @apply flex items-center px-2 w-full;
  height: 32px;
  &.dark {
    @apply bg-black;
    .material-icons-round {
      @apply text-white;
    }
  }
  &.light {
    @apply bg-white;
    .material-icons-round {
      @apply text-black;
    }
  }
}
</style>
