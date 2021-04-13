<template>
  <div class="sidebar-item">
    <div class="link">
      <router-link
        class="router-link"
        :class="{ 'router-link-active': match }"
        :to="path"
        :name="name"
      >
        {{ name }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  props: {
    name: String,
    path: String
  },
  setup(props) {
    const { path } = props
    const match = computed(() => {
      return path === useRoute().path
    })
    return {
      match
    }
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
  cursor: pointer;
}
.sidebar-item:hover {
  background-color: #263445;
}
.router-link {
  height: 55px !important;
  display: inline-block;
  font-size: 14px;
  line-height: 55px;
  color: rgb(191, 203, 217);
}
.router-link-active {
  color: rgb(64, 158, 255);
}
</style>
