<template>
  <div class="flex justify-center p-2">
    <q-btn color="white" size="sm">{{ text }}</q-btn>
  </div>
</template>

<script>
export default {
  name: 'preview-button',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
