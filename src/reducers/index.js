import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import contract from './contract'

const rootReducer = combineReducers({
  contract,
  routing
})

export default rootReducer
