import { connect } from 'react-redux'
import Header from '../components/Header'
import { addTodo } from '../actions'
import { selectInputMode } from '../selectors'

export default connect(
  (state) => ({
    inputMode: selectInputMode(state)
  }),
  { addTodo }
)(Header)
