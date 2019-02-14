import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'
import { InputModes } from '../reducers/inputMode'

const getPlaceHolder = mode => {
  return mode === InputModes.ADD ? 'What needs to be done?' : 'Search for?'
}

const Header = ({ addTodo, inputMode, search }) => (
  <header className="header">
    <TodoTextInput
      head
      onSave={(text) => {
        if (text.length !== 0) {
          const action = inputMode === InputModes.ADD ? addTodo : search
          action(text)
        }
      }}
      placeholder={getPlaceHolder(inputMode)}
    />
  </header>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
