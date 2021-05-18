<template>
  <div class="sidebar-item">
    <!-- menu-item start -->
    <el-menu-item :index="item.meta.index">
      <div class="link">
        <router-link
          class="router-link"
          :class="{ 'router-link-active': match }"
          :to="item.path"
          :name="item.name"
        >
          {{ item.name }}
        </router-link>
      </div>
    </el-menu-item>
    <!-- menu-item end -->

    <!-- submenu start -->
    <div v-if="hasChildren">
      <el-submenu>
        <sidebar-item
          v-for="(child, index) in item.children"
          :item="child"
          :key="index"
        ></sidebar-item>
      </el-submenu>
    </div>
    <!-- submenu end -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  props: {
    item: Object
  },
  setup(props) {
    const hasChildren = computed(() => {
      const children = props.item?.children
      return children && children.length > 0
    })

    const path = props.item?.path
    const match = computed(() => {
      return path === useRoute().path
    })
    return {
      hasChildren,
      match
    }
  }
})
</script>

<style>
.el-menu {
  background: transparent !important;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: transparent !important;
}
.sidebar-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  cursor: pointer;
}
.sidebar-item:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
.router-link {
  height: 55px !important;
  display: inline-block;
  font-size: 14px;
  line-height: 55px;
  color: #fff;
}
.router-link-active {
  color: #fff;
}
</style>
