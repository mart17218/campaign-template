<template>
  <div>
    <navigation />
    <banner />
    <text-section />
    <tour-section />
    <link-section />
  </div>
</template>

<script>
import navigation from './navigation'
import banner from './banner'
import textSection from './textSection'
import tourSection from './tourSection'
import linkSection from './linkSection'

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
    textSection,
    tourSection,
    linkSection
  }
}
</script>
