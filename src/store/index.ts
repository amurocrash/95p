import { createStore} from 'redux'
import { createHashHistory } from 'history'
import createRootReducer from './reducer'

export const history = createHashHistory()

const store = createStore(createRootReducer(history))

export default store