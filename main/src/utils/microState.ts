import { initGlobalState } from 'qiankun'
import { reactive } from 'vue'
import { microState } from '../config/micro'

// state只能进行新增或修改。无法删除
let initialState: any = reactive(microState)

const actions = initGlobalState(initialState)

actions.onGlobalStateChange((newState, oldState) => {
  console.log(
    `[mainApp]: globalState change
      new -> ${JSON.stringify(newState)}
      old -> ${JSON.stringify(oldState)}`
  )
  for (let key in newState) {
    initialState[key] = newState[key]
  }
})

export default actions

// extend
export const getGlobalState = (key?: string) =>
  key ? initialState[key] : initialState

export const addGlobalState = (addObj: any) => {
  const oldState = getGlobalState()
  const newState = Object.assign(oldState, addObj)
  actions.setGlobalState(newState)
}

export const updateGlobalState = (updateKey: string, updateValue: any) => {
  let hadKey: boolean = false
  const oldState = getGlobalState()
  for (const key in oldState) {
    if (key === updateKey) {
      hadKey = true
      oldState[key] = updateValue
    }
  }

  hadKey
    ? actions.setGlobalState(oldState)
    : addGlobalState({ updateKey, updateValue })
}
