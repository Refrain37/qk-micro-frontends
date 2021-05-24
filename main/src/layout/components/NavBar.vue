<template>
  <div class="navbar-container">
    <!-- hamburger start -->
    <div class="hamburger" @click="toggleSideBar">
      <i class="el-icon-menu"></i>
    </div>
    <!-- hamburger end -->

    <!-- Breadcrumb start -->
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in levelList" :key="index">
          {{ item }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- Breadcrumb end -->
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  reactive,
  ref,
  watchEffect
} from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const { isCollapse, toggleSideBar } = useSidebar()
    const levelList = useLevelList()
    return {
      isCollapse,
      toggleSideBar,
      levelList
    }
  }
})

function useSidebar() {
  const store = useStore()
  const isCollapse: ComputedRef<boolean> = computed(
    () => store.getters.isOpened
  )
  function toggleSideBar() {
    store.dispatch('app/toggleSideBar')
  }

  return {
    isCollapse,
    toggleSideBar
  }
}

function useLevelList() {
  const route = useRoute()
  const levelList = computed(() => {
    const path = route.path
    const list = path
      .substr(1)
      .split('/')
      .filter(item => item !== '')
    return list.length !== 0 ? list : ['home']
  })

  return levelList
}
</script>

<style scoped lang="scss">
@import '../../styles/variables';
.navbar-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .hamburger {
    width: 40px;
    height: 40px;
    margin-left: 20px;
    padding: 10px;
    border-radius: 50%;
    border: 1px solid $gray;
    text-align: center;
    box-sizing: border-box;
    transition: all 0.3s;
    i {
      color: $gray;
    }
    &:hover {
      background-color: $gray;
      cursor: pointer;
      i {
        color: #fff;
      }
    }
  }
  .breadcrumb {
    margin-left: 20px;
  }
}
</style>
