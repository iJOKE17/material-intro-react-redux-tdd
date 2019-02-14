import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import { InputModes } from '../reducers/inputMode';

const selectVisibilityFilter = state => state.visibilityFilter
const selectAllTodos = state => state.todos
const selectFilterTodos = state => {
  const todos = selectAllTodos(state)
  const inputMode = selectInputMode(state)
  if (inputMode === InputModes.ADD) {
    return todos
  }
  const searchText = selectSearchText(state)
  if (!searchText) {
    return todos
  }
  return todos.filter(t => t.text.startsWith(searchText))
}

export const selectVisibleTodos = (state) => {
  const visibilityFilter = selectVisibilityFilter(state)
  const todos = selectFilterTodos(state)
  switch (visibilityFilter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + visibilityFilter)
  }
}

export const selectCompletedTodoCount = (state) => {
  const todos = selectAllTodos(state)
  return todos.filter(t => t.completed).length
}

export const selectInputMode = state => state.inputMode
export const selectSearchText = state => state.search.text
