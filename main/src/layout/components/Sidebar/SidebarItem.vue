<template>
  <div class="sidebar-item">
    <!-- menu-item start -->
    <el-menu-item :index="index" v-if="!hasChildren">
      <div class="link">
        <i :class="[icon, { active: match }]"></i>
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
import { useRoute } from 'vue-router'

export default defineComponent({
  props: {
    item: Object
  },
  setup(props) {
    const hasChildren: ComputedRef<boolean> = computed(() => {
      const children = props.item?.children
      return children && children.length > 0
    })

    const path = props.item?.path
    const match: ComputedRef<boolean> = computed(() => {
      return path === useRoute().path
    })

    const index = ref<string>(props.item?.meta.index)
    const icon = ref<string>(props.item?.meta.icon)
    const title = ref<string>(props.item?.meta.title)

    return {
      hasChildren,
      match,
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
  color: white !important;
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
    background-color: rgba(255, 255, 255, 0.2);
  }
  /* link start */
  .router-link {
    height: 55px !important;
    display: inline-block;
    font-size: 14px;
    line-height: 55px;
    color: $textColor;
  }
  .router-link-active {
    color: $activeTextColor;
    text-shadow: 1px 1px 10px #c9c9c9;
  }
  .active {
    color: $activeTextColor !important;
  }
  /* link end */
  .title {
    color: $textColor;
  }
}
</style>
