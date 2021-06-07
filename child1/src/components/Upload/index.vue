<template>
  <a-upload
    v-model:file-list="fileList"
    :name="name"
    list-type="picture-card"
    action="http://rap2api.taobao.org/app/mock/282552/api/upload"
    :show-upload-list="false"
    :before-upload="beforeUpload"
    @change="handleChange"
  >
    <div v-if="imgURL" class="upload-image-outer" @click.stop="void 0">
      <div class="shadow"></div>
      <DeleteFilled class="delete" @click.stop="deleteHandle" />
      <img class="upload-image" :src="imgURL" :alt="name" />
    </div>
    <div v-else>
      <plus-outlined />
      <div class="ant-upload-text">Upload {{ name }}</div>
    </div>
  </a-upload>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'
  import { PlusOutlined, DeleteFilled } from '@ant-design/icons-vue'
  interface FileItem {
    uid: string
    name?: string
    status?: string
    response?: any
    url?: string
  }
  interface FileInfo {
    file: FileItem
    fileList: FileItem[]
  }
  interface IState {
    fileList: FileItem[]
  }

  export default defineComponent({
    props: {
      name: String,
      imgURL: String,
      reqURl: String,
      beforeUpload: Function,
    },
    emits: ['change'],
    components: {
      DeleteFilled,
      PlusOutlined,
    },
    setup(props, context) {
      const state = reactive({
        fileList: [],
      } as IState)

      const handleChange = ({ file, fileList }: FileInfo) => {
        if (file.status === 'done') {
          const { response } = file
          context.emit('change', response.data.url)
        }
        state.fileList = fileList // upadate state
      }

      const deleteHandle = () => {
        context.emit('change', '')
      }
      return {
        ...toRefs(state),
        handleChange,
        deleteHandle,
      }
    },
  })
</script>

<style scoped lang="scss">
  .upload-image-outer {
    position: relative;
    &:hover {
      .shadow {
        display: block;
      }
      .delete {
        display: block;
      }
    }
    .shadow {
      width: 100%;
      height: 100%;
      display: none;
      position: absolute;
      background: rgba($color: #000000, $alpha: 0.2);
    }
    .upload-image {
      width: 100%;
    }
    .delete {
      display: none;
      position: absolute;
      right: 50%;
      top: 50%;
      transform: scale(2);
      color: white;
    }
  }
</style>
<style lang="scss">
  .ant-upload.ant-upload-select-picture-card > .ant-upload {
    padding: 0 !important;
  }
</style>
