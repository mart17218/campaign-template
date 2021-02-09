<template>
  <div class="mb-2">
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
    <customized-button :text="buttonText" />
  </div>
</template>

<script>
import navigation from './navigation'
import banner from './banner'
import textSection from './textSection'
import tourSection from './tourSection'
import linkSection from './linkSection'
import customizedButton from './button'

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
    },
    buttonText: {
      type: String
    }
  },
  components: {
    navigation,
    banner,
    textSection,
    tourSection,
    linkSection,
    customizedButton
  }
}
</script>
