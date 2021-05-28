import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

export function useInitChart(option: any, container?: string) {
  if (!container) {
    const containerRef = ref<any>(null)
    onMounted(() => {
      const myChart = echarts.init(containerRef.value as HTMLElement)
      myChart && myChart.setOption(option)
    })
    return containerRef
  } else {
    onMounted(() => {
      const myChart = echarts.init(
        document.getElementById(container) as HTMLElement
      )
      myChart && myChart.setOption(option)
    })
  }
}
