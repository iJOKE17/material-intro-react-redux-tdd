import * as TodoSelectors from './'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import { InputModes } from '../reducers/inputMode'

const defaultState = {
  inputMode: InputModes.ADD,
  search: {
    text: ''
  }
}

describe('selectVisibleTodos', () => {
  const todos = [
    { id: 1, 'text': 'completed', completed: true },
    { id: 2, 'text': 'doing', completed: false },
  ]
  it('given SHOW_COMPLETED filter, should display both completed and active todos', () => {
    const state = {
      ...defaultState,
      todos,
      visibilityFilter: SHOW_ALL
    }
    const actual = TodoSelectors.selectVisibleTodos(state)
    expect(actual.length).toEqual(2)
    expect(actual[0].id).toEqual(1)
    expect(actual[1].id).toEqual(2)
  })

  it('given SHOW_COMPLETED filter, should display only completed todos', () => {
    const state = {
      ...defaultState,
      todos,
      visibilityFilter: SHOW_COMPLETED
    }
    const actual = TodoSelectors.selectVisibleTodos(state)
    expect(actual.length).toEqual(1)
    expect(actual[0].id).toEqual(1)
  })

  it('given SHOW_ACTIVE filter, should display only active todos', () => {
    const state = {
      ...defaultState,
      todos,
      visibilityFilter: SHOW_ACTIVE
    }
    const actual = TodoSelectors.selectVisibleTodos(state)
    expect(actual.length).toEqual(1)
    expect(actual[0].id).toEqual(2)
  })

  it('given search mode, user search for c, should display only search todo start with c', () => {
    const state = {
      ...defaultState,
      todos,
      visibilityFilter: SHOW_ALL,
      inputMode: InputModes.SEARCH,
      search: {
        text: 'c'
      }
    }
    const actual = TodoSelectors.selectVisibleTodos(state)
    expect(actual.length).toEqual(1)
    expect(actual[0].text).toEqual('completed')
  })
})

describe('selectCompletedTodoCount', () => {
  it('given one completed todos, should return 1', () => {
    const todos = [
      { id: 1, 'text': 'completed', completed: true },
      { id: 2, 'text': 'doing', completed: false },
    ]
    const state = {
      todos
    }
    const actual = TodoSelectors.selectCompletedTodoCount(state)
    expect(actual).toEqual(1)
  })
})
