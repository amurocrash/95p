import { History } from 'history'
import { connectRouter, RouterState } from 'connected-react-router'
import { combineReducers } from 'redux'

export interface AppState {
  router: RouterState
}

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history)
})

export default createRootReducer