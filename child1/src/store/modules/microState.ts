import store from '../index'
const moduleName: string = 'microState'

export default function registerMicroStateModule(props: any) {
  const { onGlobalStateChange, getGlobalState, setGlobalState } = props

  if (!store.hasModule(moduleName)) {
    // 获取初值
    const initialMicroState = (getGlobalState && getGlobalState()) || {
      user: 'qiankun-micro-child1',
    }
    const mutations = {
      SET_MICRO_STATE(state: any, newState: any) {
        state = newState
        setGlobalState(newState) // set global state
      },
      UPDATE_MICRO_STATE(state: any) {
        state = (getGlobalState && getGlobalState()) || {
          user: 'qiankun-micro-child1',
        }
        console.log(state)
      },
    }
    const actions = {
      setMicroState({ commit }: any, newState: any) {
        commit('SET_MICRO_STATE', newState)
      },
      updateMicroState({ commit }: any) {
        commit('UPDATE_MICRO_STATE')
      },
    }
    const microStateModule = {
      namespaced: true,
      state: initialMicroState,
      mutations,
      actions,
    }
    store.registerModule(moduleName, microStateModule)
  } else {
    // store.dispatch('updateMicroState')
  }
}
