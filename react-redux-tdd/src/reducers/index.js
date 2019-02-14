import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import inputMode from './inputMode'
import search from './search'

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  inputMode,
  search
})

export default rootReducer
