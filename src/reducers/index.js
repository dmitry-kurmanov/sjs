import { combineReducers } from 'redux'
import { counterReducer } from './counter'

const appReducer = combineReducers({
    counterReducer
  })
  
export default appReducer