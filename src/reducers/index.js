import {combineReducers} from 'redux'

import asyncReducer from './asyncReducer'
import simpleReducer from './simpleReducer'

const rootReducer = combineReducers({
  simple: simpleReducer,
  async: asyncReducer
})

export default rootReducer
