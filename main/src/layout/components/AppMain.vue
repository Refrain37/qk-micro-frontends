<template>
  <section class="app-main-container">
    <router-view />
    <div id="subapp-container"></div>
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

<style scoped></style>
