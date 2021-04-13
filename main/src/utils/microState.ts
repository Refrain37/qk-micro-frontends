import { initGlobalState } from 'qiankun'
import { reactive, watchEffect } from 'vue'

const initialState: any = reactive({ user: 'qiankun-micro' })

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
export const getGlobalState = (key: string) =>
  key ? initialState[key] : initialState
