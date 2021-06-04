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
            <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
              {{ (i + 9).toString(36) + i }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="cover">
          cover
        </a-form-item>
        <a-form-item label="series">
          <a-select
            size="large"
            v-model:value="formState.series"
            style="width: 100%"
            placeholder="Please select the series..."
            @change="handleSelectSeries"
          >
            <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
              {{ (i + 9).toString(36) + i }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="abstract">
          <a-textarea
            v-model:value="formState.abstract"
            showCount
            placeholder="abstract..."
            :maxlength="100"
          />
        </a-form-item>
      </a-form>
    </a-modal>

    <!-- model end -->
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, UnwrapRef } from 'vue'
  import MarkdownEditor from '../../components/MarkdowmEditor.vue'

  interface IFormState {
    title: string
    categories: string[]
    content: string
    cover?: string
    series?: string
    abstract?: string
  }

  export default defineComponent({
    components: {
      MarkdownEditor,
    },
    setup() {
      const { formState, handleSelectCats, handleSelectSeries } = useFormState()
      const { isReleasing, handleRelease, confirmRelease } = useReleaseHandle(
        formState
      )
      const { handleUploadImage, handleSave } = useMarkDownEditor(formState)
      return {
        formState,
        handleSelectCats,
        handleSelectSeries,
        handleUploadImage,
        handleSave,
        isReleasing,
        handleRelease,
        confirmRelease,
      }
    },
  })

  function useFormState() {
    const formState: UnwrapRef<IFormState> = reactive<IFormState>({
      title: '',
      content: '',
      categories: [],
      cover: undefined,
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

  // release
  function useReleaseHandle(formState: IFormState) {
    const isReleasing = ref<boolean>(false)
    const handleRelease = () => {
      isReleasing.value = true
    }
    const confirmRelease = () => {
      console.log('release', formState)
    }

    return {
      isReleasing,
      handleRelease,
      confirmRelease,
    }
  }

  // markdown-editor
  function useMarkDownEditor(state: IFormState) {
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
