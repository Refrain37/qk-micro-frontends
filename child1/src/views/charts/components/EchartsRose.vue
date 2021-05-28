<template>
  <div class="echarts-rose" id="echarts-rose" ref="rose"></div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useInitChart } from '../../../hooks/initChart'

  const option = {
    legend: {
      top: 'bottom',
    },
    title: {
      text: 'rose-demo',
      left: 'center',
    },
    series: [
      {
        name: '面积模式',
        type: 'pie',
        radius: [0, '50%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 8,
        },
        data: [
          { value: 45, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' },
        ],
      },
    ],
  }
  export default defineComponent({
    setup() {
      const rose = useInitChart(option)
      return {
        rose,
      }
    },
  })
</script>
