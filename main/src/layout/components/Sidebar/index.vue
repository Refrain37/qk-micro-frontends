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
import SidebarItem from '../Sidebar/SidebarItem.vue'
import { IRoute } from '../../../config/microRoutes'
import { getRoutes } from '../../../utils/getRoutes'

export default defineComponent({
  components: {
    SidebarItem
  },
  setup() {
    const routes: IRoute[] = reactive(getRoutes())
    return {
      routes
    }
  }
})
</script>

<style scoped lang="scss">
.sidebar-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 210px;
  height: 100%;
  background-color: #304156;
}
</style>
