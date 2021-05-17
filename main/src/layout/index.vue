<template>
  <div class="app-wrapper">
    <sidebar class="sidebar"></sidebar>
    <div class="main-container">
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Navbar, AppMain, Sidebar } from './components'

export default defineComponent({
  components: {
    Navbar,
    AppMain,
    Sidebar
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
$width: 260px;

.app-wrapper {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  .sidebar {
    width: $width;
  }
  .main-container {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: $width;
    min-height: 100%;
    width: calc(100% - #{$width});
    overflow: hidden;
  }
}
</style>
