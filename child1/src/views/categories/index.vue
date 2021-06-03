<template>
  <div class="category-container">
    <div class="control-buttons">
      <a-button class="create-btn" type="primary" @click="create">
        create newCategory
      </a-button>
    </div>
    <!-- add-modal start-->
    <a-modal
      title="create newCategory"
      v-model:visible="isCreating"
      @ok="confirmCreate"
      width="45%"
    >
      <a-form layout="vertical">
        <a-form-item label="super category">
          <a-input v-model:value="superCat" placeholder="add super-category" />
        </a-form-item>
        <a-form-item label="sub category">
          <a-input
            v-model:value="subCat"
            placeholder="add sub-category (if more than one,please splite with '；')"
          />
        </a-form-item>
      </a-form>
    </a-modal>
    <!-- add-modal end -->
    <!-- category-list start -->
    <div class="category-list">
      <h1>Category List</h1>
      <Category-card
        class="category-card"
        v-for="item in list"
        :key="item.id"
        :item="item"
        @deleteCat="deleteCatHandle"
      ></Category-card>
    </div>
    <!-- category-list end -->
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    onBeforeMount,
    reactive,
    Ref,
    ref,
    toRefs,
  } from 'vue'
  import CategoryCard from './components/CatrgoryCard.vue'
  import { fetchCategories } from '../../apis/category'
  import { ISubCat, IItem } from './components/CatrgoryCard.vue'

  export default defineComponent({
    components: {
      CategoryCard,
    },
    setup() {
      const { list } = useFetchList()
      const {
        isCreating,
        superCat,
        subCat,
        create,
        confirmCreate,
      } = useCreateHandle(list)
      const deleteCatHandle = (id: number) => {
        list.value = list.value.filter((item: any) => item.id !== id)
      }
      return {
        list,
        deleteCatHandle,
        isCreating,
        superCat,
        subCat,
        create,
        confirmCreate,
      }
    },
  })

  function useFetchList() {
    const state = reactive({ list: [] })
    onBeforeMount(async () => {
      try {
        const res = await fetchCategories()
        state.list = res.data.data.list
      } catch (error) {
        throw error
      }
    })
    return {
      ...toRefs(state),
    }
  }

  function useCreateHandle(list: Ref<any[]>) {
    const isCreating = ref<boolean>(false)
    const superCat = ref<string>('')
    const subCat = ref<string>('')
    const create = () => {
      isCreating.value = true
    }
    const confirmCreate = () => {
      let id = 1
      const subcats: ISubCat[] = subCat.value.split('；').map(value => {
        return {
          id: id += 1,
          name: value,
        }
      })
      const newCat: IItem = {
        name: superCat.value,
        id: list.value[list.value.length - 1].id + 1,
        subcategories: subcats,
      }
      // request api
      list.value.unshift(newCat)
      // clear
      isCreating.value = false
      superCat.value = ''
      subCat.value = ''
    }

    return {
      isCreating,
      superCat,
      subCat,
      create,
      confirmCreate,
    }
  }
</script>

<style scoped lang="scss">
  .category-container {
    width: 70%;
    margin: 0 auto;
    padding: 50px;
    box-sizing: border-box;
    overflow: hidden;
    .control-buttons {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    .category-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;
      .category-card {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
</style>
