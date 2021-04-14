<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>{{ user }}</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { useStore } from 'vuex'

  export default defineComponent({
    name: 'Home',
    setup() {
      const state = useStore().state
      const user = state.microState.user
      return {
        user,
      }
    },
  })
</script>
