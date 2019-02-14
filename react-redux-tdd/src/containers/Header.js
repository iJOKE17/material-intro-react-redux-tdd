import { connect } from 'react-redux'
import Header from '../components/Header'
import { addTodo, search } from '../actions'
import { selectInputMode } from '../selectors'

export default connect(
  (state) => ({
    inputMode: selectInputMode(state)
  }),
  { addTodo, search }
)(Header)
