<template>
  <div class="map-path-container">
    <h2>path animation</h2>
    <div id="map-path-animation" class="map-path-animation"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import { Scene, LineLayer } from '@antv/l7'
  import { GaodeMap } from '@antv/l7-maps'

  export default defineComponent({
    setup() {
      onMounted(() => {
        const scene = new Scene({
          id: 'map-path-animation',
          map: new GaodeMap({
            center: [120.19382669582967, 30.258134],
            pitch: 0,
            zoom: 16,
            style: 'dark',
          }),
          logoVisible: false,
        })
        scene.on('loaded', () => {
          fetch(
            'https://gw.alipayobjects.com/os/basement_prod/40ef2173-df66-4154-a8c0-785e93a5f18e.json'
          )
            .then(res => res.json())
            .then(data => {
              const layer = new LineLayer()
                .source(data)
                .size(1.5)
                .shape('line')
                .color('#25d8b7')
                .animate({
                  interval: 1, // 间隔
                  duration: 1, // 持续时间，延时
                  trailLength: 2, // 流线长度
                })
              scene.addLayer(layer)
            })
        })
      })
      return {}
    },
  })
</script>

<style scoped lang="scss">
  .map-path-animation {
    height: 500px;
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-top: 20px;
    will-change: transform;
  }
</style>
