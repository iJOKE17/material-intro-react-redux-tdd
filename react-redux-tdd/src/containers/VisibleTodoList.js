import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import TodoList from '../components/TodoList'
import { selectVisibleTodos } from '../selectors'

const mapStateToProps = state => ({
  filteredTodos: selectVisibleTodos(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
