import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'
import FilterLinks from '../containers/FilterLinks'
import { toggleInputMode } from '../reducers/inputMode'

const filterLinks = () => (
  <FilterLinks />
)

const MainSection = ({ todosCount, completedCount, actions, inputMode }) => {
  return (
    <section className="main">
      {
        !!todosCount &&
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={actions.completeAllTodos}/>
        </span>
      }
      <VisibleTodoList />
      {
        !!todosCount &&
        <Footer
          completedCount={completedCount}
          inputMode={inputMode}
          activeCount={todosCount - completedCount}
          onClearCompleted={actions.clearCompleted}
          onToggleInputMode={() => actions.setInputMode(toggleInputMode(inputMode))}
          renderFilterLinks={filterLinks}
        />
      }
    </section>
  )
    }

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  inputMode: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection;
