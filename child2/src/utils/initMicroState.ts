interface IActions {
  onGlobalStateChange: () => {}
  getGlobalState: (key?: string) => {}
  setGlobalState: (newState: any) => {}
}

let initialMicroState: any = null
let actions: IActions | null = null

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
}

export function getInitialMicroState() {
  return initialMicroState
}

export function getActions() {
  return actions
}
