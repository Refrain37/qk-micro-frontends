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
      v-for="(subcat, index) in item.subcategories"
      :key="index"
    >
      <div class="subcat-item">
        <a-popconfirm
          title="Are you sure delete this category?"
          ok-text="Yes"
          cancel-text="No"
          @confirm="confirm('comfirm', subcat.id)"
          @cancel="cancel"
        >
          <CloseCircleOutlined class="delete" v-show="isSetting" />
        </a-popconfirm>
        <span>{{ subcat.name }}</span>
      </div>
    </a-card-grid>
    <!-- add start -->
    <a-card-grid style="width: 25%; text-align: center" v-if="isSetting">
      <PlusOutlined class="add" @click="add" />
    </a-card-grid>
    <a-modal :title="item.name" v-model:visible="isAdding" @ok="confirmAdd">
      <a-input v-model:value="newCat" placeholder="add new category" />
    </a-modal>
    <!-- add end -->
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
    subcategories: any[]
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
      const { isAdding, add, confirmAdd, newCat } = useAddHandle(
        props.item as IItem
      )

      return {
        isSetting,
        setHandle,
        confirm,
        cancel,
        isAdding,
        add,
        confirmAdd,
        newCat,
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
    const confirm = (e: MouseEvent, subcatId?: number) => {
      if (subcatId && typeof subcatId === 'number') {
        item.subcategories =
          item.subcategories &&
          item.subcategories.filter((item: any) => item.id !== subcatId)
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

  function useAddHandle(item: IItem) {
    const isAdding = ref<boolean>(false)
    const newCat = ref<string>('')
    const add = () => {
      isAdding.value = true
    }
    const confirmAdd = () => {
      const newItem = {
        name: newCat.value,
        id: item.subcategories[item.subcategories.length - 1].id + 1,
      }
      item.subcategories.push(newItem)
      newCat.value = ''
      isAdding.value = false
    }

    return {
      isAdding,
      add,
      confirmAdd,
      newCat,
    }
  }
</script>

<style lang="scss">
  .options {
    width: 30%;
    display: flex;
    flex-direction: row;
    align-items: center;
    button {
      margin-left: 10px;
    }
  }
  .subcat-item {
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
