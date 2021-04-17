import { combineReducers } from 'redux'
import microState from './microState'

const rootReducer = {
  microState,
}

export default combineReducers(rootReducer)
