interface ISidebar {
  isOpened: boolean
}
export interface IAppState {
  sidebar: ISidebar
}

const state: IAppState = {
  sidebar: {
    isOpened: true
  }
}
const mutations = {
  TOGGLE_SIDEBAR(state: IAppState) {
    state.sidebar.isOpened = !state.sidebar.isOpened
  }
}
const actions = {
  toggleSideBar({ commit }: any) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
