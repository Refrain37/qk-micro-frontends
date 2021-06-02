<template>
  <div class="category-list-container">
    <h1>list</h1>
    <button @click="add">add newCategory</button>
    <!-- add-modal start-->
    <a-modal
      title="add category"
      v-model:visible="isAdding"
      @ok="confirmAdd"
      width="45%"
    >
      <a-form layout="vertical">
        <a-form-item label="super category">
          <a-input v-model:value="superCat" placeholder="add super-category" />
        </a-form-item>
        <a-form-item label="sub category">
          <a-input
            v-model:value="subCats"
            placeholder="add sub-category (if more than one,please splite with ';')"
          />
        </a-form-item>
      </a-form>
    </a-modal>
    <!-- add-modal end -->
    <!-- category-list start -->
    <div class="category-list">
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
  import { defineComponent, onBeforeMount, reactive, ref, toRefs } from 'vue'
  import CategoryCard from './components/CatrgoryCard.vue'
  import { fetchCategories } from '../../apis/category'

  export default defineComponent({
    components: {
      CategoryCard,
    },
    setup() {
      const { list } = useFetchList()
      const { isAdding, superCat, subCats, add, confirmAdd } = useAddHandle(
        list
      )
      const deleteCatHandle = (id: number) => {
        list.value = list.value.filter((item: any) => item.id !== id)
      }
      return {
        list,
        deleteCatHandle,
        isAdding,
        superCat,
        subCats,
        add,
        confirmAdd,
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

  function useAddHandle(list: any) {
    const isAdding = ref<boolean>(false)
    const superCat = ref<string>('')
    const subCats = ref<string>('')
    const add = () => {
      isAdding.value = true
    }
    const confirmAdd = () => {
      const subCat = {
        name: subCats.value,
        id: 1,
      }
      const subcats: any[] = Array()
      subcats.push(subCat)
      const newCat = {
        name: superCat.value,
        id: 10086,
        subcategories: subcats,
      }
      list.value.unshift(newCat)
      isAdding.value = false
      superCat.value = ''
      subCats.value = ''
    }

    return {
      isAdding,
      superCat,
      subCats,
      add,
      confirmAdd,
    }
  }
</script>

<style scoped lang="scss">
  .add-inputs {
    input {
      margin: 20px 0;
    }
  }
  .category-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    .category-card {
      width: 70%;
      margin-top: 20px;
    }
  }
</style>
