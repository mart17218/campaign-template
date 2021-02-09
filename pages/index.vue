<template>
  <div class="index-container">
    <div class="w-1/2 p-4">
      <h5 class="mb-4">版型選擇</h5>
      <div>
        <label class="block">選單列</label>
        <q-radio v-for="mode in options.mode" :key="mode" v-model="value.mode" :val="mode" :label="mode" />
        <label class="block">文字排列</label>
        <q-radio v-for="align in options.align" :key="align" v-model="value.align" :val="align" :label="align" />
        <label class="block">banner</label>
        <q-input v-model="value.bannerUrl" filled />
      </div>
    </div>
    <div class="bg-gray-200 w-1/2 p-4">
      <div class="bg-white h-full rounded p-2">
        <preview-content
          :nav-theme="value.mode"
          :align="value.align"
          :banner-url="value.bannerUrl"
        />
      </div>
    </div>
  </div>
</template>

<script>
import previewContent from '~/components/previewContent'

export default {
  name: 'index',
  data() {
    return {
      value: {
        mode: 'light',
        bannerUrl: '',
        align: 'left'
      },
      options: {
        mode: ['light', 'dark'],
        align: ['left', 'right', 'center']
      }
    }
  },
  components: {
    previewContent
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.index-container {
  @apply flex;
  width: 100%;
  min-height: 100vh;
}
</style>
