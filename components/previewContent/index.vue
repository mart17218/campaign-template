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
    <tour-section :tour-list="tourList" />
    <link-section :article-list="articleList" />
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
    tourList: {
      type: Array
    },
    articleList: {
      type: Array
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
