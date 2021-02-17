<template>
  <div class="index-container">
    <div class="w-1/2 p-4 overflow-y-auto">
      <h5 class="mb-4">樣式設定</h5>
      <div>
        <label class="block">選單列</label>
        <q-radio v-for="mode in options.mode" :key="mode" v-model="value.mode" :val="mode" :label="mode" />
        <hr class="my-4" />
      </div>
      <h5 class="mb-4">版型配置</h5>
      <div>
        <label-card :title="`圖片區塊`" class="mb-2">
          <template v-slot:content>
            <label class="block">圖片連結</label>
            <q-input v-model="value.bannerUrl" filled />
          </template>
        </label-card>
        <label-card :title="`文字區塊`" class="mb-2">
          <template v-slot:content>
            <label class="block">排列方式</label>
            <q-radio v-for="align in options.align" :key="align" v-model="value.align" :val="align" :label="align" />
            <label class="block">內容</label>
            <q-input v-model="value.textContent" filled />
          </template>
        </label-card>
        <label-card :title="`行程區塊`" class="mb-2">
          <template v-slot:content>
            <div>
              <div v-for="tour in value.tourList" :key="tour.id">{{ tour }}</div>
            </div>
            <div class="mt-2">
              <q-btn color="white" text-color="black" @click="addTour">
                <span class="material-icons-round text-sm">add</span>新增行程
              </q-btn>
            </div>
          </template>
        </label-card>
        <label-card :title="`連結區塊`" class="mb-2">
          <template v-slot:content>
            <div>
              <div v-for="article in value.articleList" :key="article.id">{{ article }}</div>
            </div>
            <div class="mt-2">
              <q-btn color="white" text-color="black" @click="addLink">
                <span class="material-icons-round text-sm">add</span>新增連結
              </q-btn>
            </div>
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
          :tour-list="value.tourList"
          :article-list="value.articleList"
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

const defaultTour = {
  title: '行程',
  price: 0
}

const defaultLink = {
  title: '連結'
}

export default {
  name: 'index',
  data() {
    return {
      value: {
        mode: 'light',
        bannerUrl: '',
        align: 'left',
        textContent: '內容文字',
        buttonText: '預設文字',
        tourList: [{ id: 0, ...defaultTour }],
        articleList: [{ id: 0, ...defaultLink }]
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
  },
  methods: {
    addTour() {
      const id = this.value.tourList.length
      this.value.tourList.push({ id, ...defaultTour })
    },
    addLink() {
      const id = this.value.articleList.length
      this.value.articleList.push({ id, ...defaultLink })
    }
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
