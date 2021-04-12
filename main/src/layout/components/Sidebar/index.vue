<template>
  <div class="sidebar-container">
    <sidebar-item
      v-for="(item, index) in routes"
      :key="index"
      :name="item.name"
      :path="item.path"
    >
    </sidebar-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import SidebarItem from './SidebarItem.vue'
import { IRoute, microRoutes } from '../../../config/microRoutes'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    SidebarItem
  },
  setup() {
    const mainRoutes = useRouter().options.routes.map(item => {
      return {
        name: item.name,
        path: item.path
      }
    })
    const routes: IRoute[] = [...(mainRoutes as IRoute[]), ...microRoutes]

    return {
      routes
    }
  }
})
</script>

<style scoped lang="scss">
.sidebar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 210px;
  background-color: #304156;
}
</style>

function useRouter() { throw new Error('Function not implemented.') }
