<template>
  <div class="index-container">
    <div class="w-1/2 p-4">
      <h5 class="mb-4">版型選擇</h5>
      <div>
        <label class="block">選單列</label>
        <q-radio v-for="mode in options.mode" :key="mode" v-model="value.mode" :val="mode" :label="mode" />
        <label class="block">文字排列</label>
        <q-radio v-for="align in options.align" :key="align" v-model="value.align" :val="align" :label="align" />
        <label class="block">文字內容</label>
        <q-input v-model="value.textContent" filled />
        <label class="block">首圖連結</label>
        <q-input v-model="value.bannerUrl" filled />
        <label class="block">按鈕</label>
        <q-input v-model="value.buttonText" filled />
      </div>
    </div>
    <div class="bg-gray-200 w-1/2 p-4">
      <div class="bg-white h-full overflow-y-auto rounded">
        <preview-content
          :nav-theme="value.mode"
          :align="value.align"
          :text-content="value.textContent"
          :banner-url="value.bannerUrl"
          :button-text="value.buttonText"
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
        align: 'left',
        textContent: '內容文字',
        buttonText: '預設文字'
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

<style lang="scss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.index-container {
  @apply flex;
  width: 100%;
  height: calc(100vh - #{$navigationHeight});
  label {
    @apply mt-4;
  }
}
</style>
