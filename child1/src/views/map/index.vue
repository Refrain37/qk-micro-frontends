<template>
  <div class="map-container">
    <h1 class="title">map</h1>
    <div class="map-list">
      <path-animation class="path-animation card"></path-animation>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import PathAnimation from './components/MapPathAnimation.vue'

  export default defineComponent({
    components: {
      PathAnimation,
    },
    setup() {
      return {}
    },
  })
</script>

<style lang="scss" scoped>
  .map-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    .title {
      width: 100%;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background-color: #ffffff;
      box-sizing: border-box;
    }
    .map-list {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
      .card {
        padding: 30px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #ffffff;
        box-sizing: border-box;
      }
      .path-animation {
        width: 100%;
      }
    }
  }
</style>
