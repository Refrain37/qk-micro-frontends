<template>
  <teleport to="#login">
    <div class="login-container">
      <el-form
        class="login-form"
        ref="loginFormRef"
        :model="loginForm"
        :rules="loginRules"
      >
        <h1>LOGIN IN</h1>

        <el-form-item prop="username" class="form-item">
          <el-input
            class="input"
            v-model="loginForm.username"
            placeholder="Username"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password" class="form-item">
          <el-input
            class="input"
            v-model="loginForm.password"
            placeholder="Password"
            show-password
            @keyup.enter="handleLogin"
          ></el-input>
        </el-form-item>

        <el-button class="button" type="primary" @click="handleLogin"
          >Login</el-button
        >
      </el-form>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const { loginForm, loginFormRef, handleLogin } = useLogin()
    const loginRules = useloginRules()

    return {
      loginForm,
      handleLogin,
      loginFormRef,
      loginRules
    }
  }
})

const useLogin = () => {
  const router = useRouter()
  const store = useStore()

  interface ILoginForm {
    username: string
    password: string
  }

  const loginForm: ILoginForm = reactive({
    username: '',
    password: ''
  })

  const loginFormRef = ref<any>(null)

  const handleLogin = () => {
    loginFormRef.value.validate(async (valid: boolean) => {
      if (valid) {
        try {
          await store.dispatch('user/login', loginForm) // request
          router.replace('/') // redirect
        } catch (error) {}
      } else {
        return false
      }
    })
  }

  return {
    loginForm,
    loginFormRef,
    handleLogin
  }
}
// validataRules
const useloginRules = () => {
  const validateUsername = (rule: any, value: any, callback: any) => {
    if (value.length < 5) {
      callback(new Error('please enter the correct username'))
    } else {
      callback()
    }
  }

  const validatePassword = (rule: any, value: any, callback: any) => {
    if (value.length < 8) {
      callback(new Error('the password can not be less than 8 digits'))
    } else {
      callback()
    }
  }

  const loginRules = reactive({
    username: [
      { required: true, trigger: 'blur', validator: validateUsername }
    ],
    password: [{ required: true, trigger: 'blur', validator: validatePassword }]
  })

  return loginRules
}
</script>

<style scoped lang="scss">
.login-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(125deg, #00f260, #12c2e9, #c471ed, #f64f59);
  background-size: 400%;
  animation: bganimation 15s infinite;
  @keyframes bganimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    padding: 50px;
    background-color: rgba($color: #000000, $alpha: 0.3);
    border-radius: 20px;
    h1 {
      color: white;
      margin-bottom: 40px;
    }
    .form-item {
      width: 100%;
    }
    .button {
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
