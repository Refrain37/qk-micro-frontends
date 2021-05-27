<template>
  <div class="sidebar-item">
    <!-- menu-item start -->
    <el-menu-item :index="index" v-if="!hasChildren">
      <Link :icon="icon" :name="name" :path="path"></Link>
    </el-menu-item>
    <!-- menu-item end -->

    <!-- submenu start -->
    <el-submenu v-else :index="index">
      <template #title>
        <span class="title">
          <i :class="icon"></i>
          <span>{{ title }}</span>
        </span>
      </template>
      <sidebar-item
        v-for="(child, index) in item.children"
        :item="child"
        :key="index"
      ></sidebar-item>
    </el-submenu>
    <!-- submenu end -->
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref } from 'vue'
import Link from './Link.vue'

export default defineComponent({
  props: {
    item: Object
  },
  components: {
    Link
  },
  setup(props) {
    const hasChildren: ComputedRef<boolean> = computed(() => {
      const children = props.item?.children
      return children && children.length > 0
    })

    const path = ref<string>(props.item?.path)
    const name = ref<string>(props.item?.name)
    const index = ref<string>(props.item?.meta.index)
    const icon = ref<string>(props.item?.meta.icon)
    const title = ref<string>(props.item?.meta.title)

    return {
      hasChildren,
      path,
      name,
      index,
      icon,
      title
    }
  }
})
</script>
