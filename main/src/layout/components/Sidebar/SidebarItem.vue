<template>
  <div class="sidebar-item">
    <div class="link">
      <router-link class="router-link" :to="path" :name="name">
        {{ name }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: String,
    path: String
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.sidebar-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  cursor: pointer;
}
.sidebar-item:hover {
  background-color: #263445;
}
.router-link {
  color: rgb(191, 203, 217);
}
</style>
