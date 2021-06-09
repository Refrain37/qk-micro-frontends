<template>
  <div class="home-container">
    <div>{{ user }}</div>
    <div>{{ token }}</div>
    <div>{{ userInfo }}</div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'
  import { useStore } from 'vuex'

  export default defineComponent({
    setup() {
      const globalState = useGetGlobalState()
      return {
        ...toRefs(globalState),
      }
    },
  })

  interface IState {
    microState: any
  }
  interface IGlobalState {
    user: string
    token?: string
    userInfo: any
  }
  function useGetGlobalState() {
    const state: IState = useStore().state
    const { user, token, userInfo } = state.microState
    const globalState: IGlobalState = reactive({
      user: user,
      token: token,
      userInfo: JSON.parse(userInfo),
    })

    return globalState
  }
</script>

<style scoped></style>
