import { SET_INPUT_MODE } from '../constants/ActionTypes'

export const InputModes = {
  ADD: 'ADD',
  SEARCH: 'Search'
}

const inputMode = (state = InputModes.ADD, action) => {
  switch (action.type) {
    case SET_INPUT_MODE:
      return action.mode
    default:
      return state
  }
}

export default inputMode
