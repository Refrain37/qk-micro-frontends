<template>
  <div class="navbar-container">
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
import { computed, defineComponent, reactive, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()

    const levelList = computed(() => {
      const path = route.path
      const list = path
        .substr(1)
        .split('/')
        .filter(item => item !== '')
      return list.length !== 0 ? list : ['home']
    })

    return {
      levelList
    }
  }
})
</script>

<style scoped lang="scss">
.navbar-container {
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  .breadcrumb {
    margin-left: 20px;
  }
}
</style>
