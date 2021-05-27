<template>
  <div class="echarts-candlestick" id="echarts-candlestick"></div>
</template>

<script lang="ts">
  import { defineComponent, inject, onMounted } from 'vue'

  const option = {
    xAxis: {
      data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'],
    },
    yAxis: {},
    series: [
      {
        type: 'k',
        data: [
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42],
        ],
      },
    ],
  }
  export default defineComponent({
    setup() {
      const echarts: any = inject('echarts')
      onMounted(() => {
        const mychart = echarts.init(
          document.getElementById('echarts-candlestick')
        )
        mychart && mychart.setOption(option)
      })
      return {}
    },
  })
</script>

<style scoped></style>
