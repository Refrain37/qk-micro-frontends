import { getInfo, login, logout } from '@/apis/user'
import { getGlobalState, updateGlobalState } from '../../micro/state'
import { getToken, deleteToken, setToken } from '../../utils/auth'

interface IUserState {
  token: string | undefined
  username: string
  avatar: string
  email: string
  github: string
  introduction: string
}

const state: IUserState = {
  token: getToken(),
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
      updateGlobalState('token', token) // update globalState
      setToken(token) // set token
      commit('SET_TOKEN', token) // commit
      return
    } catch (error) {
      throw Error('login fail')
    }
  },
  async getInfo({ commit, state }: any) {
    try {
      // check globalState
      if (!getGlobalState('token')) {
        updateGlobalState('token', state.token)
      }

      const res = await getInfo()
      const data = res.data.data
      updateGlobalState('userInfo', JSON.stringify(data)) // update globalState

      // commit
      const { username, avatar, email, github, introduction } = data
      commit('SET_USERNAME', username)
      commit('SET_AVATAR', avatar)
      commit('SET_EMAIL', email)
      commit('SET_GITHUB', github)
      commit('SET_INTRODUCTION', introduction)

      return data
    } catch (error) {
      throw Error('err')
    }
  },
  async logout({ commit }: any) {
    try {
      const res = await logout()
      deleteToken()
      // update globalState
      updateGlobalState('token', null)
      updateGlobalState('userInfo', null)

      // commit
      commit('SET_TOKEN', '')
      commit('SET_USERNAME', '')
      commit('SET_AVATAR', '')
      commit('SET_EMAIL', '')
      commit('SET_GITHUB', '')
      commit('SET_INTRODUCTION', '')

      return res.data.data
    } catch (error) {
      throw Error('err')
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
