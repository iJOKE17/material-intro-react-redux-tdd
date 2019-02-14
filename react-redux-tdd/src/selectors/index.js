import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const selectVisibilityFilter = state => state.visibilityFilter
const selectAllTodos = state => state.todos

export const selectVisibleTodos = (state) => {
  const visibilityFilter = selectVisibilityFilter(state)
  const todos = selectAllTodos(state)
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
