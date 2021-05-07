import { getInfo, login } from '@/apis/user'
import { getGlobalState, updateGlobalState } from '../../utils/microState'
import { getToken, deleteToken, setToken } from '../../utils/auth'

interface IUserState {
  token: string
  username: string
  avatar: string
  email: string
  github: string
  introduction: string
}

const state: IUserState = {
  token: '',
  username: '',
  avatar: '',
  email: '',
  github: '',
  introduction: ''
}
const mutations = {
  SET_TOKEN(state: IUserState, token: string) {
    state.token = token
  },
  SET_USERNAME(state: IUserState, username: string) {
    state.username = username
  },
  SET_AVATAR(state: IUserState, avatar: string) {
    state.avatar = avatar
  },
  SET_EMAIL(state: IUserState, email: string) {
    state.email = email
  },
  SET_GITHUB(state: IUserState, github: string) {
    state.github = github
  },
  SET_INTRODUCTION(state: IUserState, introduction: string) {
    state.introduction = introduction
  }
}
const actions = {
  async login(
    { commit }: any,
    formData: { username: string; password: string }
  ) {
    try {
      const res = await login(formData)
      const token = res.data.data.token
      updateGlobalState('token', token)
      setToken(token)
      commit('SET_TOKEN', token)
      return
    } catch (error) {
      throw Error('login fail')
    }
  },
  async getInfo({ commit, state }: any) {},
  async logout() {}
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
