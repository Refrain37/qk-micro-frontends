<template>
  <v-md-editor
    v-model="content"
    :disabled-menus="[]"
    @save="handleSave"
    @upload-image="handleUploadImage"
    height="700px"
  ></v-md-editor>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup() {
      const content = ref<string>('')
      const handleUploadImage = (
        event: any,
        insertImage: any,
        files: any[]
      ) => {
        console.log(files)
        insertImage({
          url:
            'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
          desc: '七龙珠',
          width: '300',
          height: 'auto',
        })
      }
      const handleSave = (text: any, html: any) => {
        console.log(text, html)
      }
      return {
        content,
        handleSave,
        handleUploadImage,
      }
    },
  })
</script>

<style scoped></style>
