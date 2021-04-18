<template>
  <div class="home-container">
    <h1>home page</h1>
    <button @click="setState">setState</button>
    <button @click="addState">addState</button>
    <button @click="updateState">updateState</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue'
import microState, {
  getGlobalState,
  addGlobalState,
  updateGlobalState
} from '../../utils/microState'

export default defineComponent({
  setup() {
    console.log(getGlobalState())
    const setState = () => {
      microState.setGlobalState({ user: 'change!!!' })
      console.log(getGlobalState())
    }
    const addState = () => {
      addGlobalState({ test: 'test' })
      console.log(getGlobalState())
    }

    const updateState = () => {
      updateGlobalState('token', '123')
      console.log(getGlobalState())
    }

    return {
      setState,
      addState,
      updateState
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
