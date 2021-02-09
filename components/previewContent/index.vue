<template>
  <div>
    <navigation
      :mode="navTheme"
    />
    <banner :url="bannerUrl" />
    <text-section
      :mode="align"
      :content="textContent"
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
    bannerUrl: {
      type: String,
      default: ''
    },
    align: {
      type: String
    },
    textContent: {
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
