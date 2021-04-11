<template>
  <div class="side-bar-container">
    <router-link to="/">Home</router-link>|
    <router-link to="/child1">vue</router-link>|
    <router-link to="/child1/test">vue-test</router-link>|
    <router-link to="/child2">react</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>

<style scoped>

</style>