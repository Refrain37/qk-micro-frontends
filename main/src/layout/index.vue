<template>
  <div class="app-wrapper">
    <sidebar></sidebar>
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
.app-wrapper {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  .main-container {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: 210px;
    min-height: 100%;
    width: calc(100% - 210px);
    overflow: hidden;
  }
}
</style>
