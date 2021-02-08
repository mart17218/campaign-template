<template>
  <div class="preview-navigation">
    <span class="material-icons-round text-sm text-white">menu</span>
  </div>
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

<style scoped>
.preview-navigation {
  @apply bg-black flex items-center px-2 w-full;
  height: 32px;
}
</style>
