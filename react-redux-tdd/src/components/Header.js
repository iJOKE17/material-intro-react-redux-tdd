import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'
import { InputModes } from '../reducers/inputMode'

const getPlaceHolder = mode => {
  return mode === InputModes.ADD ? 'What needs to be done?' : 'Search for?'
}

const Header = ({ addTodo, inputMode }) => (
  <header className="header">
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addTodo(text)
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
