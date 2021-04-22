<template>
  <layout></layout>
  <div id="login" class="login"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from './layout/index.vue'

export default defineComponent({
  components: {
    Layout
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.login {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>
