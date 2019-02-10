import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'


const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

export const FilterLinks = (props) => {
  const { visiblilityFilter, onSetVisiblityFilter } = props
  return (
    <ul className="filters">
      {Object.keys(FILTER_TITLES).map(filter =>
        <li key={filter}>
          <Link
            active={filter === visiblilityFilter}
            setFilter={() => onSetVisiblityFilter(filter)}
          >
            {FILTER_TITLES[filter]}
          </Link>
        </li>
      )}
    </ul>
  )
}

FilterLinks.propTypes = {
  visiblilityFilter: PropTypes.string.isRequired,
  onSetVisiblityFilter: PropTypes.func.isRequired
}

export default connect(
  (state, ownProps) => ({ visiblilityFilter: state.visibilityFilter }),
  (dispatch, ownProps) => ({ onSetVisiblityFilter: (f) => dispatch(setVisibilityFilter(f))})

)(FilterLinks)
