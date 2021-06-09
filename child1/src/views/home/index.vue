<template>
  <div class="home-page-container">
    <div class="list">
      <div class="header">
        <h1>global state</h1>
        <a-button type="primary" @click="change">change state</a-button>
      </div>
      <div class="item">
        <div>
          <span>user : </span><span>{{ user }}</span>
        </div>
        <a-input v-model:value="user" />
      </div>

      <div class="item">
        <div>
          <span>token : </span><span>{{ token }}</span>
        </div>
        <a-input v-model:value="token" />
      </div>

      <div class="item">
        <div>
          <span>username : </span><span>{{ userInfo.username }}</span>
        </div>
        <a-input v-model:value="userInfo.username" />
      </div>

      <div class="item">
        <div>
          <span>avatar : </span><span>{{ userInfo.avatar }}</span>
        </div>
        <a-input v-model:value="userInfo.avatar" />
      </div>

      <div class="item">
        <div>
          <span>email : </span><span>{{ userInfo.email }}</span>
        </div>
        <a-input v-model:value="userInfo.email" />
      </div>

      <div class="item">
        <div>
          <span>github : </span><span>{{ userInfo.github }}</span>
        </div>
        <a-input v-model:value="userInfo.github" />
      </div>

      <div class="item">
        <div>
          <span>introduction : </span><span>{{ userInfo.introduction }}</span>
        </div>
        <a-input v-model:value="userInfo.introduction" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'
  import { useStore } from 'vuex'

  export default defineComponent({
    setup() {
      const globalState = useGetGlobalState()
      const change = useChangeState(globalState)
      return {
        change,
        ...toRefs(globalState),
      }
    },
  })

  interface IUserInfo {
    avatar: string
    username: string
    email: string
    github: string
    introduction: string
  }
  interface IGlobalState {
    user: string
    token: string
    userInfo: IUserInfo | string
  }
  interface IState {
    microState: IGlobalState
  }
  function useGetGlobalState() {
    const state: IState = useStore().state
    const { user, token, userInfo } = state.microState
    const globalState: IGlobalState = reactive({
      user: user,
      token: token,
      userInfo: reactive({ ...(JSON.parse(userInfo as string) as IUserInfo) }),
    })

    return globalState
  }

  function useChangeState(globalState: IGlobalState) {
    const store = useStore()
    const change = async () => {
      const newState: IGlobalState = {
        user: globalState.user,
        token: globalState.token,
        userInfo: JSON.stringify(globalState.userInfo),
      }
      await store.dispatch('microState/setMicroState', newState)
    }

    return change
  }
</script>

<style scoped lang="scss">
  .home-page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    .list {
      width: 60%;
      padding: 30px;
      background: white;
      .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .item {
        margin-top: 15px;
      }
    }
  }
</style>
