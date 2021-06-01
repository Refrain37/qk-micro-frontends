<template>
  <div class="category-list-container">
    <h1>list</h1>
    <div class="category-list">
      <Category-card
        class="category-card"
        v-for="item in list"
        :key="item.id"
        :item="item"
        @deleteCat="deleteCatHandle"
      ></Category-card>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onBeforeMount, reactive, toRefs } from 'vue'
  import CategoryCard from './components/CatrgoryCard.vue'
  import { fetchCategories } from '../../apis/category'

  export default defineComponent({
    components: {
      CategoryCard,
    },
    setup() {
      const { list } = useFetchList()
      const deleteCatHandle = (id: number) => {
        list.value = list.value.filter((item: any) => item.id !== id)
      }
      return {
        list,
        deleteCatHandle,
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
</script>

<style scoped lang="scss">
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
