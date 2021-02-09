<template>
  <div>
    <navigation
      :mode="navTheme"
    />
    <banner />
    <text-section
      :mode="align"
    />
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
    navTheme: {
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
