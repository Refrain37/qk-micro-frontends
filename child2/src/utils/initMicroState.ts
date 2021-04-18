import { store } from '../index'
import { getMicroState } from '../actions/microState'

interface IActions {
  onGlobalStateChange: () => {}
  getGlobalState: (key?: string) => {}
  setGlobalState: (newState: any) => {}
}

let initialMicroState: any = null
export let actions: IActions | null = null

export default function initMicroState(props: any) {
  const { onGlobalStateChange, getGlobalState, setGlobalState } = props
  actions = {
    onGlobalStateChange,
    getGlobalState,
    setGlobalState,
  }
  initialMicroState = (getGlobalState && getGlobalState()) || {
    user: 'qiankun-micro-child2',
  }
  // because the life-cycle, the time of initMicroState is later than init-reducer
  // need to set the initialMicroState to redux by dispatch
  store.dispatch(getMicroState())
}

export function getInitialMicroState() {
  return initialMicroState
}

export function getActions() {
  return actions
}
