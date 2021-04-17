import { microStateAcionTypes, IMicroStateAction } from '../actions/microState'
import { getInitialMicroState, getActions } from '../utils/initMicroState'

export default function microState(
  state: any = getInitialMicroState() || null,
  action: IMicroStateAction
): any {
  const actions = getActions()
  switch (action.type) {
    case microStateAcionTypes.GET:
      return actions?.getGlobalState()
    case microStateAcionTypes.SET:
      return typeof action.payload === 'object'
        ? actions?.setGlobalState(action.payload)
        : state
    default:
      return state
  }
}
