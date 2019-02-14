import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => {
  const { activeCount, completedCount, onClearCompleted, renderFilterLinks } = props
  const itemWord = activeCount === 1 ? 'item' : 'items'
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
      {renderFilterLinks()}
      <div className="footer-tools">
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
  onClearCompleted: PropTypes.func.isRequired,
}

export default Footer
