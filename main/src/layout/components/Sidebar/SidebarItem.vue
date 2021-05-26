<template>
  <div class="sidebar-item">
    <!-- menu-item start -->
    <el-menu-item :index="index" v-if="!hasChildren">
      <Link
        :icon="icon"
        :name="name"
        :path="path"
        :isCollapse="isCollapse"
      ></Link>
    </el-menu-item>
    <!-- menu-item end -->

    <!-- submenu start -->
    <el-submenu v-else :index="index">
      <template #title>
        <span class="title">
          <i :class="icon"></i>
          <span v-if="!isCollapse">{{ title }}</span>
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
    item: Object,
    isCollapse: Boolean
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

<style lang="scss">
@import '../../../styles/variables.scss';
/* el-ui start */
.el-menu {
  background: transparent !important;
}
.el-submenu {
  width: 100%;
}
.el-submenu__title i {
  color: $textColor !important;
}
.el-submenu__title:hover {
  background-color: transparent !important;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background-color: transparent !important;
}
.el-menu-item i {
  color: $textColor !important;
}
.el-menu--collapse {
  width: 80px !important;
}
.el-menu--popup {
  background-image: $bgColor !important;
}
/* el-ui end */

.sidebar-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  .title {
    color: $textColor;
    span {
      font-weight: 700;
    }
  }
}
</style>
