<template>
  <v-md-editor
    :disabled-menus="[]"
    @save="handleSave"
    @upload-image="handleUploadImage"
  ></v-md-editor>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    emits: ['uploadImg', 'save'],
    setup(props, context) {
      // 上传图片
      const handleUploadImage = (
        event: any,
        insertImage: any,
        files: any[]
      ) => {
        context.emit('uploadImg', event, insertImage, files)
      }
      // 保存
      const handleSave = (text: any, html: any) => {
        context.emit('save', text, html)
      }
      return {
        handleSave,
        handleUploadImage,
      }
    },
  })
</script>

<style scoped></style>
