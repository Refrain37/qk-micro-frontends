<template>
  <section class="appMain-container">
    <router-view />
    <!-- micro start -->
    <div id="subapp-container" class="subapp-container"></div>
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
@import '../../styles/variables';
.appMain-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: $appMainBgColor;
  .subapp-container {
    height: 100%;
    width: 100%;
  }
}
</style>
