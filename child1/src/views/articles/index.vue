<template>
  <div class="article-list-container">
    <!-- list start -->
    <a-table
      class="article-list"
      :columns="columns"
      :data-source="list"
      :scroll="{ x: 1800, y: 500 }"
    >
      <template #time="{text:time}">
        {{ parseTime(time, '{y}-{m}-{d}') }}
      </template>

      <template #categories="{text:cats}">
        <a-tag v-for="(cat, index) in cats" :key="cat" :color="colors[index]">
          {{ cat.toUpperCase() }}
        </a-tag>
      </template>

      <template #cover="{text:cover}">
        <img class="cover" :src="cover" alt="cover" />
      </template>

      <template #series="{text:series}">
        <a-tag color="#3b5999">
          <template #icon>
            <BookOutlined />
          </template>
          {{ series }}
        </a-tag>
      </template>

      <template #action="{record }">
        <div class="action-buttons">
          <a-button type="primary" @click="editHandle(record.id)"
            >Edit</a-button
          >
          <a-popconfirm
            title="Are you sure delete this article？"
            ok-text="Yes and Delete"
            cancel-text="No"
            @confirm="deleteHandle(record.id)"
          >
            <a-button type="danger">Delete</a-button>
          </a-popconfirm>
        </div>
      </template>
    </a-table>
    <!-- list end -->
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, reactive, toRefs } from 'vue'
  import { useRouter } from 'vue-router'
  import { fetchArticles, delArticle } from '../../apis/article'
  import { notification } from 'ant-design-vue'
  import { BookOutlined } from '@ant-design/icons-vue'
  import { parseTime } from '../../utils'

  const colors = ['red', 'blue', 'orange', 'green', 'purple', 'purple']

  const columns = [
    {
      title: 'ID',
      width: 100,
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      fixed: 'left',
      sorter: (a: IArticle, b: IArticle) => a.id - b.id,
    },
    {
      title: 'Title',
      width: 150,
      dataIndex: 'title',
      key: 'title',
      align: 'center',
      fixed: 'left',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      fixed: 'left',
      align: 'center',
      width: 150,
      slots: { customRender: 'time' },
      sorter: (a: IArticle, b: IArticle) => parseInt(a.time) - parseInt(b.time),
    },

    {
      title: 'Categories',
      dataIndex: 'categories',
      key: 'categories',
      align: 'center',
      width: 150,
      slots: { customRender: 'categories' },
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
      width: 200,
      align: 'center',
      ellipsis: true,
    },
    {
      title: 'Cover',
      dataIndex: 'cover',
      key: 'cover',
      width: 200,
      align: 'center',
      slots: { customRender: 'cover' },
    },
    {
      title: 'Series',
      dataIndex: 'series',
      key: 'series',
      width: 150,
      align: 'center',
      slots: { customRender: 'series' },
    },
    {
      title: 'Abstract',
      dataIndex: 'abstract',
      key: 'abstract',
      width: 200,
      align: 'center',
      ellipsis: true,
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 200,
      align: 'center',
      slots: { customRender: 'action' },
    },
  ]

  interface IArticle {
    key?: string
    id: number
    title: string
    categories: string[]
    content: string
    cover: string
    series?: string
    abstract?: string
    time: string
  }
  interface IState {
    list: IArticle[]
  }

  export default defineComponent({
    components: {
      BookOutlined,
    },
    setup() {
      const state: IState = reactive({
        list: [],
      })
      useFetchList(state) // fetch list
      const { editHandle } = useEditHandle()
      const { deleteHandle } = useDeleteHandle(state)

      return {
        colors,
        columns,
        parseTime,
        ...toRefs(state),
        editHandle,
        deleteHandle,
      }
    },
  })

  // fetch list
  function useFetchList(state: IState) {
    onMounted(async () => {
      const res = await fetchArticles()
      state.list = res.data.data.list.map((item: IArticle) => {
        item.key = item.id + ''
        return item
      })
    })
  }

  // edit
  function useEditHandle() {
    const router = useRouter()
    const editHandle = (id: number) => {
      router.push({
        path: '/article/editor',
        query: {
          id,
        },
      })
    }

    return {
      editHandle,
    }
  }

  // delete
  function useDeleteHandle(state: IState) {
    const deleteHandle = async (id: number) => {
      try {
        const res = await delArticle(id)
        if (res.status === 200 && res.data.isOk === 1) {
          state.list = state.list.filter((item: IArticle) => {
            return item.id !== id
          })
          notification.success({
            message: 'delete article',
            description: `the article(id:${id}) was deleted `,
          })
        }
      } catch (error) {
        console.log(error)
      }
    }

    return {
      deleteHandle,
    }
  }
</script>

<style scoped lang="scss">
  .article-list-container {
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .article-list {
      width: 100%;
      .cover {
        width: 100%;
      }
      .action-buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    }
  }
</style>
