<template>
  <div class="link">
    <router-link
      class="router-link"
      :class="{ 'router-link-active': match }"
      :to="path"
      :name="name"
    >
      <i :class="[icon]"></i>
      <span class="name">{{ name }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  props: {
    name: String,
    icon: String,
    path: String
  },
  setup(props) {
    const path = props.path
    const match: ComputedRef<boolean> = computed(() => {
      return path === useRoute().path
    })

    return {
      match
    }
  }
})
</script>
