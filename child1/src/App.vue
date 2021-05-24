<template>
  <router-view />
</template>

<script lang="ts">
  import { defineComponent, provide } from 'vue'
  import * as echarts from 'echarts'

  export default defineComponent({
    setup() {
      provide('echarts', echarts) // 将echarts注入到全局
    },
  })
</script>
