import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import inputMode from './inputMode'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  inputMode
})

export default rootReducer
