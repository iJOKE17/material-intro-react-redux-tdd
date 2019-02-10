import React from 'react';
import 'todomvc-app-css/index.css'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TodoList from './TodoList'

const actions = {
  editTodo: action('EditTodo'),
  deleteTodo: action('deleteTodo'),
  completeTodo: action('completeTodo')
}
storiesOf('TodoList', module)
  .add('Empty', () => {
    const todos = [
    ]
    return (
      <TodoList
        filteredTodos={todos}
        actions={actions}
      />
    )
  })
  .add('With items', () => {
    const todos = [
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      },
      {
        text: 'Use React',
        completed: false,
        id: 1
      },
      {
        text: 'Use Node',
        completed: false,
        id: 2
      },
    ]
    return (
      <TodoList
        filteredTodos={todos}
        actions={actions}
      />
    )
  })
  .add('With some completed items', () => {
    const todos = [
      {
        text: 'Use Redux',
        completed: true,
        id: 0
      },
      {
        text: 'Use React',
        completed: false,
        id: 1
      },
      {
        text: 'Use Node',
        completed: false,
        id: 2
      },
    ]
    return (
      <TodoList
        filteredTodos={todos}
        actions={actions}
      />
    )
  })
