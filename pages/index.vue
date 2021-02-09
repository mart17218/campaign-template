<template>
  <div class="index-container">
    <div class="w-1/2 p-4">
      <h5 class="mb-4">樣式設定</h5>
      <div>
        <label class="block">選單列</label>
        <q-radio v-for="mode in options.mode" :key="mode" v-model="value.mode" :val="mode" :label="mode" />
        <hr class="my-4" />
      </div>
      <h5 class="mb-4">版型選擇</h5>
      <div>
        <label-card :title="`文字區塊`" class="mb-2">
          <template v-slot:content>
            <label class="block">排列方式</label>
            <q-radio v-for="align in options.align" :key="align" v-model="value.align" :val="align" :label="align" />
            <label class="block">內容</label>
            <q-input v-model="value.textContent" filled />
          </template>
        </label-card>
        <label-card :title="`圖片區塊`" class="mb-2">
          <template v-slot:content>
            <label class="block">圖片連結</label>
            <q-input v-model="value.bannerUrl" filled />
          </template>
        </label-card>
        <label-card :title="`按鈕`" class="mb-2">
          <template v-slot:content>
            <label class="block">文字</label>
            <q-input v-model="value.buttonText" filled />
          </template>
        </label-card>
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
import labelCard from '~/components/labelCard'

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
    previewContent,
    labelCard
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
}
</style>
