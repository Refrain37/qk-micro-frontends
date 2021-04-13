<template>
  <div class="navbar-container">
    this is navbar
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>
.navbar-container {
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
}
</style>
