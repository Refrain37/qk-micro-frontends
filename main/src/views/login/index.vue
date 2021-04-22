<template>
  <teleport to="#login">
    <div class="login-container">
      <div class="login-form">
        <h1>Login</h1>
        <input
          class="input"
          type="text"
          v-model="username"
          placeholder="enter your username"
        />
        <input
          class="input"
          type="password"
          v-model="password"
          placeholder="enter your password"
        />
        <button @click="handleLogin">login</button>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { updateGlobalState } from '../../utils/microState'

export default defineComponent({
  setup() {
    const router = useRouter()
    const username = ref<string>('')
    const password = ref<string>('')
    const handleLogin = () => {
      if (username.value !== null && password.value !== null) {
        console.log(username.value, password.value)
        // update the globalState
        const token = 'this_is_a_fake_token'
        updateGlobalState('token', token)
        router.replace('/') // redirect
      }
    }
    return {
      username,
      password,
      handleLogin
    }
  }
})
</script>

<style scoped lang="scss">
.login-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: bisque;
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
