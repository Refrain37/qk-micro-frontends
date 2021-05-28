<template>
  <div class="charts-container">
    <h1 class="title">Echarts</h1>
    <div class="chart-list" ref="chartListRef">
      <Line class="line card" ref="lineRef"></Line>
      <Rose class="rose card" ref="roseRef"></Rose>
      <Candlestick class="candlestick card" ref="candlestickRef"></Candlestick>
      <Bar class="bar card" ref="barRef"></Bar>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, inject, onBeforeUnmount, onMounted, ref } from 'vue'
  import Line from './components/EchatsLine.vue'
  import Rose from './components/EchartsRose.vue'
  import Bar from './components/EchartsBar.vue'
  import Candlestick from './components/EchartsCandlestick.vue'
  import { onElementResize, rmAllElementResize } from '../../utils/resize'

  export default defineComponent({
    components: {
      Line,
      Rose,
      Bar,
      Candlestick,
    },
    setup() {
      const echarts: any = inject('echarts')
      const chartListRef = ref<any>(null)
      const lineRef = ref<any>(null)
      const roseRef = ref<any>(null)
      const candlestickRef = ref<any>(null)
      const barRef = ref<any>(null)

      let line: any = null,
        rose: any = null,
        candlestick: any = null,
        bar: any = null

      onMounted(() => {
        line = echarts.getInstanceByDom(lineRef.value.$el)
        rose = echarts.getInstanceByDom(roseRef.value.$el)
        candlestick = echarts.getInstanceByDom(candlestickRef.value.$el)
        bar = echarts.getInstanceByDom(barRef.value.$el)

        const instanceLsit = [line, rose, candlestick, bar]
        const option = {
          animation: {
            duration: 1500,
          },
        }

        onElementResize(chartListRef.value, () => {
          // 避免同时resize（重排重绘）
          instanceLsit.forEach((item, index) => {
            setTimeout(() => {
              item.resize(option)
            }, (index + 1) * 200)
          })
        })
      })
      onBeforeUnmount(() => {
        line = null
        rose = null
        candlestick = null
        bar = null
        rmAllElementResize(chartListRef.value)
      })
      return {
        chartListRef,
        lineRef,
        roseRef,
        candlestickRef,
        barRef,
      }
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
      will-change: transform;
      transform: translateZ(0px);
      z-index: 10;
      .card {
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #ffffff;
        box-sizing: border-box;
        will-change: transform;
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
