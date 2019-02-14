import { SEARCH } from '../constants/ActionTypes'

const search = (state = '', action) => {
  switch (action.type) {
    case SEARCH:
      return {
        text: action.text
      }
    default:
      return state
  }
}

export default search
