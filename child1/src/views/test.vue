<template>
  <div class="test-container">
    <!-- increament start -->
    <h1>count:{{ count }}</h1>
    <button @click="increament">increament</button>
    <!-- increament end -->

    <!-- check start -->
    <h1 class="name">{{ name }}</h1>
    <input class="name-input" type="text" v-model="name" />
    <p class="check-tip" v-if="checked">the input's value has been checked</p>
    <!-- check end -->
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'Test',
    setup() {
      const { count, increament } = useIncrement()
      const { name, checked } = useCheck()
      return {
        count,
        increament,
        name,
        checked,
      }
    },
  })

  function useIncrement() {
    const count = ref<number>(0)
    const increament = () => {
      count.value += 1
    }
    return {
      count,
      increament,
    }
  }

  function useCheck() {
    const name = ref<string>('')
    const checked = computed(() => name.value !== '')

    return {
      name,
      checked,
    }
  }
</script>

<style scoped></style>
