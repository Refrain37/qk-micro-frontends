<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>{{ token }}</div>
    <button @click="testHandle">test</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useStore } from 'vuex'
  import { test } from '../apis/test'

  export default defineComponent({
    name: 'Home',
    setup() {
      const state = useStore().state
      const token = (state.microState && state.microState.token) || 'null'
      const testHandle = async () => {
        const res = await test({})
        console.log(res.data.data.msg)
      }
      return {
        token,
        testHandle,
      }
    },
  })
</script>
