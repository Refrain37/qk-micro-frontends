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
    }
    const actions = {
      setMicroState({ commit }: any, newState: any) {
        commit('SET_MICRO_STATE', newState)
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
    console.log('micro state module has been exist')
  }
}
