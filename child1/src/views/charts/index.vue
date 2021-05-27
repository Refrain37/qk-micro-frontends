<template>
  <div class="charts-container">
    <h1 class="title">Echarts</h1>
    <div class="chart-list">
      <Line class="line card"></Line>
      <Rose class="rose card"></Rose>
      <Candlestick class="candlestick card"></Candlestick>
      <Bar class="bar card"></Bar>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Line from './components/EchatsLine.vue'
  import Rose from './components/EchartsRose.vue'
  import Bar from './components/EchartsBar.vue'
  import Candlestick from './components/EchartsCandlestick.vue'

  export default defineComponent({
    components: {
      Line,
      Rose,
      Bar,
      Candlestick,
    },
    setup() {
      return {}
    },
  })
</script>

<style lang="scss" scoped>
  .charts-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      width: 100%;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #ffffff;
      box-sizing: border-box;
    }
    /* chart-list start */
    .chart-list {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 30px;
      .card {
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #ffffff;
        box-sizing: border-box;
      }
      .line {
        height: 450px;
        width: 60%;
      }
      .rose {
        height: 450px;
        width: 38%;
      }
      .bar {
        height: 400px;
        width: 55%;
        margin-top: 20px;
      }
      .candlestick {
        height: 400px;
        width: 43%;
        margin-top: 20px;
      }
    }
    /* chart-list end */
  }
</style>
