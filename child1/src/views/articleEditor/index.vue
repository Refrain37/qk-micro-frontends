<template>
  <div class="article-editor-container">
    <h1>markdown-editor</h1>
    <markdown-editor
      class="markdown-editor"
      v-model="content"
      @uploadImg="handleUploadImage"
      @save="handleSave"
    ></markdown-editor>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import MarkdownEditor from '../../components/MarkdowmEditor.vue'

  export default defineComponent({
    components: {
      MarkdownEditor,
    },
    setup() {
      const { content, handleUploadImage, handleSave } = useMarkDownEditor()
      return {
        content,
        handleUploadImage,
        handleSave,
      }
    },
  })
  // markdown-editor
  function useMarkDownEditor() {
    const content = ref<string>('')
    const handleUploadImage = (event: any, insertImage: any, files: any[]) => {
      console.log(files, 'parent')
    }
    const handleSave = (text: any, html: any) => {
      console.log(text)
    }

    return {
      content,
      handleUploadImage,
      handleSave,
    }
  }
</script>

<style scoped>
  .markdown-editor {
    height: 500px;
  }
</style>
