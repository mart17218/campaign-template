<template>
  <div>
    <navigation />
    <banner />
    <text-section />
  </div>
</template>

<script>
import navigation from './navigation'
import banner from './banner'
import textSection from './textSection'

export default {
  props: {
    navigation: {
      type: String
    },
    banner: {
      type: String,
      default: ''
    },
    align: {
      type: String
    }
  },
  components: {
    navigation,
    banner,
    textSection
  }
}
</script>
