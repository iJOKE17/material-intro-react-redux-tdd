import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'
var moment = require('moment')

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props
    const labelClassname = 'ax-todo-label' + (todo.importent ? ' importent': '');
    let element
    if (this.state.editing) {
      element = (
        <div className='ax-todo-input-mode'>
          <TodoTextInput
            className='ax-todo-text-input'
            text={todo.text}
            editing={this.state.editing}
            onSave={(text) => this.handleSave(todo.id, text)}
          />
        </div>
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => completeTodo(todo.id)} />
          <label className={labelClassname} onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <div class="todo-completed-date">
            {todo.completed ? moment(todo.completedDate).format('d/MM/YYYY') : null }
          </div>
          <button className="destroy"
                  onClick={() => deleteTodo(todo.id)} />
        </div>
      )
    }

    return (
      <div className={classnames('todo-item', {
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </div>
    )
  }
}
