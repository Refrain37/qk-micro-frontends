<template>
  <div class="home-container">
    <h1>home page</h1>
    <button @click="setState">setState</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import microState, { getGlobalState } from '../../utils/microState'

export default defineComponent({
  setup() {
    const setState = () => {
      microState.setGlobalState({ user: 'qiankun-micro-main-change', age: 18 })
    }
    return {
      setState
    }
  }
})
</script>

<style scoped>
.home-container {
  height: 1000px;
  width: 2000px;
  background-color: green;
}
</style>
