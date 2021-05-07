<template>
  <section class="app-main-container">
    <router-view />
    <!-- micro start -->
    <div id="subapp-container"></div>
    <!-- micro end -->
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="scss">
.app-main-container {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
