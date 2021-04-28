<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>{{ token }}</div>
    <div>{{ msg }}</div>
    <button @click="testHandle">test</button>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useStore } from 'vuex'
  import { test } from '../apis/testReq'

  export default defineComponent({
    name: 'Home',
    setup() {
      const state = useStore().state
      const token = (state.microState && state.microState.token) || 'null'
      const msg = ref<string>('null')

      const testHandle = async () => {
        const res = await test({})
        msg.value = res.data.data.msg
      }
      return {
        token,
        testHandle,
        msg,
      }
    },
  })
</script>
