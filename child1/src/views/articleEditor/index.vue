<template>
  <div class="article-editor-container">
    <div class="editor-header">
      <a-input
        v-model:value="formState.title"
        size="large"
        placeholder="please enter the title..."
      />
      <a-button class="release-btn" type="primary" @click="handleRelease"
        >Release</a-button
      >
    </div>
    <markdown-editor
      class=" markdown-editor"
      v-model="formState.content"
      @uploadImg="handleUploadImage"
      @save="handleSave"
    ></markdown-editor>

    <!-- model start -->
    <a-modal
      title="Release Article"
      v-model:visible="isReleasing"
      ok-text="comfirm and release"
      @ok="confirmRelease"
      width="50%"
    >
      <!-- category start -->
      <a-form :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
        <a-form-item label="category">
          <a-select
            size="large"
            mode="multiple"
            v-model:value="formState.categories"
            style="width: 100%"
            placeholder="Please select the category..."
            @change="handleSelectCats"
          >
            <a-select-option
              v-for="cat in articleCats.subcategories"
              :key="cat.id"
            >
              {{ cat.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <!-- category end -->
        <!-- cover start -->
        <a-form-item label="cover">
          <upload-img
            class="cover-uploader"
            name="cover"
            :imgURL="formState.cover"
            @change="handleChange"
            :beforeUpload="beforeUpload"
          ></upload-img>
        </a-form-item>
        <!-- cover end -->
        <!-- series start -->
        <a-form-item label="series">
          <a-select
            size="large"
            v-model:value="formState.series"
            style="width: 100%"
            placeholder="Please select the series..."
            @change="handleSelectSeries"
          >
            <a-select-option v-for="cat in series.subcategories" :key="cat.id">
              {{ cat.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <!-- series end -->
        <!-- abstract start -->
        <a-form-item label="abstract">
          <a-textarea
            v-model:value="formState.abstract"
            showCount
            placeholder="abstract..."
            :maxlength="100"
          />
        </a-form-item>
        <!-- abstract end -->
      </a-form>
    </a-modal>
    <!-- model end -->
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    onMounted,
    reactive,
    ref,
    toRefs,
    UnwrapRef,
  } from 'vue'
  import MarkdownEditor from '../../components/MarkdownEditor/index.vue'
  import UploadImg from '../../components/Upload/index.vue'
  import { fetchCategories } from '../../apis/category'

  export default defineComponent({
    components: {
      MarkdownEditor,
      UploadImg,
    },
    setup() {
      const { formState, handleSelectCats, handleSelectSeries } = useFormState()
      const cats = useFetchCats()
      const { isReleasing, handleRelease, confirmRelease } = useReleaseHandle(
        formState,
        cats
      )
      const { handleUploadImage, handleSave } = useMarkDownEditor(formState)
      const { handleChange, beforeUpload } = useUploadCover(formState)
      return {
        formState,
        ...toRefs(cats),
        handleSelectCats,
        handleSelectSeries,
        handleUploadImage,
        handleSave,
        isReleasing,
        handleRelease,
        confirmRelease,
        handleChange,
        beforeUpload,
      }
    },
  })

  // formState
  interface IFormState {
    title: string
    categories: string[]
    content: string
    cover?: string
    series?: string
    abstract?: string
  }
  function useFormState() {
    const formState: UnwrapRef<IFormState> = reactive<IFormState>({
      title: '',
      content: '',
      categories: [],
      cover: '',
      series: undefined,
      abstract: undefined,
    })
    const handleSelectCats = (value: string[]) => {
      formState.categories = value
    }
    const handleSelectSeries = (value: string) => {
      formState.series = value
    }

    return {
      formState,
      handleSelectCats,
      handleSelectSeries,
    }
  }

  // fetch cats
  const ARTICLE_CAT_ID = 1
  const SERIES_CAT_ID = 2
  interface ICats {
    articleCats: []
    series: []
  }

  function useFetchCats() {
    const cats: UnwrapRef<ICats> = reactive({
      articleCats: [],
      series: [],
    })
    onMounted(async () => {
      const [res1, res2] = await Promise.all([
        fetchCategories(ARTICLE_CAT_ID),
        fetchCategories(SERIES_CAT_ID),
      ])
      cats.articleCats = res1.data.data.list[ARTICLE_CAT_ID]
      cats.series = res2.data.data.list[SERIES_CAT_ID]
    })

    return cats
  }

  // release
  function useReleaseHandle(formState: IFormState, cats: ICats) {
    const isReleasing = ref<boolean>(false)
    const handleRelease = () => {
      isReleasing.value = true
    }
    const confirmRelease = () => {
      console.log('release', formState)
      // request
      // clear
      formState.title = ''
      formState.content = ''
      formState.categories = []
      formState.cover = ''
      formState.series = ''
      formState.abstract = ''
      cats.articleCats = []
      cats.series = []
      isReleasing.value = false
    }

    return {
      isReleasing,
      handleRelease,
      confirmRelease,
    }
  }

  // upload cover
  function useUploadCover(formState: IFormState) {
    const handleChange = (url: string) => {
      formState.cover = url
    }

    const beforeUpload = () => {}

    return {
      handleChange,
      beforeUpload,
    }
  }

  // markdown-editor
  function useMarkDownEditor(formState: IFormState) {
    const handleUploadImage = (event: any, insertImage: any, files: any[]) => {
      console.log(files, 'parent')
    }
    const handleSave = (text: any, html: any) => {
      console.log(text)
    }

    return {
      handleUploadImage,
      handleSave,
    }
  }
</script>

<style scoped lang="scss">
  $headerHeight: 65px;
  .article-editor-container {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 60px);
    .editor-header {
      width: 100%;
      height: $headerHeight;
      display: flex;
      flex-direction: row;
      .release-btn {
        height: 100%;
        width: 170px;
      }
    }
    .markdown-editor {
      height: calc(100% - #{$headerHeight});
    }
  }
</style>
<style lang="scss">
  .cover-uploader > .ant-upload {
    width: 300px;
  }
</style>
