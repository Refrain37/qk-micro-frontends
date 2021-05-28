<template>
  <div class="app-wrapper">
    <sidebar class="sidebar transition"></sidebar>
    <div class="main-container transition">
      <navbar class="navbar-container" />
      <app-main class="appMain-container" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { Navbar, AppMain, Sidebar } from './components'

export default defineComponent({
  components: {
    Navbar,
    AppMain,
    Sidebar
  },
  setup() {
    const store = useStore()
    const width = computed(() =>
      store.getters.isOpened === true ? '260px' : '80px'
    )
    return { width }
  }
})
</script>

<style scoped lang="scss">
$width: v-bind(width);

.app-wrapper {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  .sidebar {
    width: $width;
    will-change: transform;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: $width;
    min-height: 100%;
    width: calc(100% - #{$width});
    overflow: hidden;
    .navbar-container {
      height: 60px;
    }
    .appMain-container {
      min-height: calc(100vh - 60px);
    }
  }
}
</style>
