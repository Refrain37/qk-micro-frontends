<template>
  <a-card hoverable>
    <template #title>
      <h2>{{ item.name }}</h2>
    </template>
    <!-- extra start -->
    <template #extra>
      <div class="options">
        <a-button type="primary" ghost @click="setHandle">
          {{ isSetting ? 'complete' : 'Set' }}
        </a-button>
        <a-popconfirm
          title="Are you sure delete this category?"
          ok-text="Yes"
          cancel-text="No"
          @confirm="confirm"
          @cancel="cancel"
        >
          <a-button type="danger" ghost :disabled="isSetting ? true : false">
            Delete
          </a-button>
        </a-popconfirm>
      </div>
    </template>
    <!-- extra end -->
    <!-- children start -->
    <a-card-grid
      style="width: 25%; text-align: center"
      v-for="(child, index) in item.children"
      :key="index"
    >
      <div class="child-cat">
        <a-popconfirm
          title="Are you sure delete this category?"
          ok-text="Yes"
          cancel-text="No"
          @confirm="confirm('comfirm', child.id)"
          @cancel="cancel"
        >
          <CloseCircleOutlined class="delete" v-show="isSetting" />
        </a-popconfirm>
        <span>{{ child.name }}</span>
      </div>
    </a-card-grid>
    <a-card-grid style="width: 25%; text-align: center" v-if="isSetting"
      ><PlusOutlined class="add"
    /></a-card-grid>
    <!-- children end -->
  </a-card>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { message } from 'ant-design-vue'
  import { CloseCircleOutlined, PlusOutlined } from '@ant-design/icons-vue'

  interface IItem {
    name: string
    id: number
    children?: any[]
  }

  export default defineComponent({
    emits: ['deleteCat'],
    props: {
      item: Object,
    },
    components: {
      CloseCircleOutlined,
      PlusOutlined,
    },
    setup(props, context) {
      const { isSetting, setHandle } = useSetHandle()
      const { confirm, cancel } = useDeleteHandle(context, props.item as IItem)

      return {
        isSetting,
        setHandle,
        confirm,
        cancel,
      }
    },
  })

  function useSetHandle() {
    const isSetting = ref<boolean>(false)
    const setHandle = () => {
      isSetting.value = !isSetting.value
    }

    return {
      isSetting,
      setHandle,
    }
  }

  function useDeleteHandle(context: any, item: IItem) {
    const { id } = item
    const confirm = (e: MouseEvent, childId?: number) => {
      if (childId && typeof childId === 'number') {
        item.children =
          item.children &&
          item.children.filter((item: IItem) => item.id !== childId)
      } else {
        context.emit('deleteCat', id)
      }
    }

    const cancel = () => {
      message.error('cancal')
    }
    return {
      confirm,
      cancel,
    }
  }
</script>

<style scoped lang="scss">
  .options {
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    button {
      margin-left: 10px;
    }
  }
  .child-cat {
    position: relative;
    .delete {
      position: absolute;
      top: -10px;
      right: -10px;
      color: rgb(255, 123, 120);
    }
  }
  .add {
    font-size: 20px;
  }
</style>
