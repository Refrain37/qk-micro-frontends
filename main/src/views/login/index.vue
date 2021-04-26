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
import { updateGlobalState } from '../../utils/microState'

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
    loginFormRef.value.validate((valid: boolean) => {
      if (valid) {
        const token = 'this_is_a_fake_token'
        updateGlobalState('token', token) // save token to the globalState
        router.replace('/') // redirect
      }
    })
  }

  return {
    loginForm,
    loginFormRef,
    handleLogin
  }
}
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
  background-color: #2d3a4b;
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
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
