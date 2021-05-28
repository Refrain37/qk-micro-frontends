import { onBeforeUnmount, onMounted, ref } from 'vue'
import * as echarts from 'echarts'

export function useInitChart(option: any, container?: string) {
  if (!container) {
    const containerRef = ref<any>(null)
    let myChart: any
    onMounted(() => {
      myChart = echarts.init(containerRef.value as HTMLElement)
      myChart && myChart.setOption(option)
      window.addEventListener('resize', () => {
        myChart.resize()
      })
    })
    onBeforeUnmount(() => {
      myChart.clear()
      myChart.dispose()
      myChart = null
    })
    return containerRef
  } else {
    let myChart: any
    onMounted(() => {
      myChart = echarts.init(document.getElementById(container) as HTMLElement)
      myChart && myChart.setOption(option)
    })
    onBeforeUnmount(() => {
      myChart.clear()
      myChart.dispose()
      myChart = null
    })
  }
}
