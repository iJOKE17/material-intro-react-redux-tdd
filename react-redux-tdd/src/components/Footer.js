import React from 'react'
import PropTypes from 'prop-types'
import { InputModes } from '../reducers/inputMode'

const Footer = (props) => {

  const getInputModeTitle = () => props.inputMode === InputModes.ADD ? 'Search mode' : 'Add mode'
  const { activeCount, completedCount, onClearCompleted, renderFilterLinks, onToggleInputMode } = props
  const itemWord = activeCount === 1 ? 'item' : 'items'
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
      {renderFilterLinks()}
      <div className="footer-tools">
        <button className='footer-btn' onClick={onToggleInputMode}>
          {getInputModeTitle()}
        </button>
      {
        !!completedCount &&
        <button
          className="footer-btn"
          onClick={onClearCompleted}
        >Clear completed</button>

      }
      </div>

    </footer>
  )
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  inputMode: PropTypes.string.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onToggleInputMode: PropTypes.func.isRequired,
}

export default Footer
