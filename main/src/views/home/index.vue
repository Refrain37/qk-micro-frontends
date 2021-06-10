<template>
  <div class="home-container">
    <el-form
      class="globalState-form"
      :model="globalState"
      label-position="left"
      label-width="100px"
    >
      <el-form-item label="user">
        <div class="item-body">
          <el-input v-model="globalState.user"></el-input>
          <el-button type="primary" @click="updateHandle('user')"
            >Update</el-button
          >
        </div>
      </el-form-item>
      <el-form-item label="token">
        <div class="item-body">
          <el-input v-model="globalState.token"></el-input>
          <el-button type="primary" @click="updateHandle('token')"
            >Update</el-button
          >
        </div>
      </el-form-item>
      <el-form-item label="username">
        <div class="item-body">
          <el-input v-model="globalState.userInfo.username"></el-input>
          <el-button type="primary" @click="updateHandle('userInfo')"
            >Update</el-button
          >
        </div>
      </el-form-item>
      <el-form-item label="avatar">
        <div class="item-body">
          <el-input v-model="globalState.userInfo.avatar"></el-input>
          <el-button type="primary" @click="updateHandle('userInfo')"
            >Update</el-button
          >
        </div>
      </el-form-item>
      <el-form-item label="email">
        <div class="item-body">
          <el-input v-model="globalState.userInfo.email"></el-input>
          <el-button type="primary" @click="updateHandle('userInfo')"
            >Update</el-button
          >
        </div>
      </el-form-item>
      <el-form-item label="github">
        <div class="item-body">
          <el-input v-model="globalState.userInfo.github"></el-input>
          <el-button type="primary" @click="updateHandle('userInfo')"
            >Update</el-button
          >
        </div>
      </el-form-item>
      <el-form-item label="introduction">
        <div class="item-body">
          <el-input v-model="globalState.userInfo.introduction"></el-input>
          <el-button type="primary" @click="updateHandle('userInfo')"
            >Update</el-button
          >
        </div>
      </el-form-item>
      <el-form-item label="add" v-if="isAdding">
        <div class="item-body">
          <el-input v-model="addState.key" placeholder="key"></el-input>
          <el-input v-model="addState.value" placeholder="value"></el-input>
          <el-button type="primary" @click="confirm">confirm</el-button>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="updateHandle">Update</el-button>
        <el-button type="primary" @click="addHandle">Add</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import microState, {
  getGlobalState,
  addGlobalState,
  updateGlobalState
} from '../../micro/state'

export default defineComponent({
  setup() {
    const globalState = useGetGlobalState()
    const updateHandle = useUpdateHandle(globalState)
    const { addHandle, isAdding, confirm, addState } = useAddHandle()
    return {
      globalState,
      updateHandle,
      addHandle,
      isAdding,
      confirm,
      addState
    }
  }
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
enum globalStateProperties {
  user = 'user',
  token = 'token',
  userInfo = 'userInfo'
}
function useGetGlobalState() {
  const globalState: IGlobalState = { ...getGlobalState() }
  globalState.userInfo = reactive({
    ...(JSON.parse(globalState.userInfo as string) as IUserInfo)
  })
  return globalState
}

function useUpdateHandle(globalState: IGlobalState) {
  const updateHandle = (key?: globalStateProperties) => {
    if (!key) {
      globalState.userInfo = JSON.stringify(globalState.userInfo)
      microState.setGlobalState(globalState)
      globalState.userInfo = reactive({
        ...(JSON.parse(globalState.userInfo as string) as IUserInfo)
      })
    } else {
      if (key === globalStateProperties.userInfo) {
        updateGlobalState(key, JSON.stringify(globalState[key]))
        globalState[key] = reactive({
          ...(JSON.parse(globalState.userInfo as string) as IUserInfo)
        })
      } else {
        updateGlobalState(key, globalState[key])
      }
    }
  }

  return updateHandle
}

function useAddHandle() {
  const addState = reactive({
    key: '',
    value: ''
  })
  const isAdding = ref<Boolean>(false)
  const addHandle = () => {
    isAdding.value = true
  }
  const confirm = () => {
    const newState = {
      [addState.key]: addState.value
    }
    addGlobalState(newState)
  }

  return {
    isAdding,
    addHandle,
    addState,
    confirm
  }
}
</script>

<style scoped lang="scss">
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .globalState-form {
    width: 60%;
    margin-top: 30px;
    padding: 40px 50px 10px;
    background-color: #fff;
    .item-body {
      display: flex;
      flex-direction: row;
      & > button {
        margin-left: 20px;
      }
    }
  }
}
</style>
