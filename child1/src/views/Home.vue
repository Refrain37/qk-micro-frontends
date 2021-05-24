<template>
  <div class="home-container">
    <div>{{ token }}</div>
    <div>{{ msg }}</div>
    <button @click="testHandle">test</button>
    <div class="echarts-demo">
      <Echarts class="echarts-line card"></Echarts>
      <Echarts-rose class="echarts-rose card"></Echarts-rose>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { useStore } from 'vuex'
  import Echarts from '../components/EchatsLine.vue'
  import EchartsRose from '../components/EchartsRose.vue'
  import { test } from '../apis/testReq'

  export default defineComponent({
    components: {
      Echarts,
      EchartsRose,
    },
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

<style lang="scss" scoped>
  .home-container {
    padding: 20px;
    .echarts-demo {
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      .card {
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #ffffff;
        box-sizing: border-box;
      }
    }
  }
</style>
