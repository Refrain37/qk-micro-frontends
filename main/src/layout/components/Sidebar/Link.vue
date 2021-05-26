<template>
  <div class="link">
    <router-link
      class="router-link"
      :class="{ 'router-link-active': match }"
      :to="path"
      :name="name"
    >
      <i :class="[icon, { active: match }]"></i>
      <span v-if="!isCollapse" class="name">{{ name }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    name: String,
    icon: String,
    path: String,
    isCollapse: Boolean
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

<style lang="scss" scoped>
@import '../../../styles/variables.scss';

.router-link {
  height: 55px !important;
  display: inline-block;
  font-size: 14px;
  line-height: 55px;
  color: $textColor;
}
.router-link-active {
  color: $activeTextColor;
  text-shadow: 1px 1px 10px #a09f9f;
}
.active {
  color: $activeTextColor !important;
}
.name {
  font-weight: 700;
}
</style>
