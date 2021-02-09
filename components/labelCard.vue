<template>
  <div class="p-2 rounded shadow-2">
    <slot name="header">
      <label class="block text-xs text-blue-500 font-bold pb-2">{{ title }}</label>
    </slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'labelCard',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
