import React from 'react';
import 'todomvc-app-css/index.css'
import { storiesOf } from '@storybook/react';

import TodoList from './TodoList'

storiesOf('TodoList', module)
  .add('Empty', () => {
    const todos = [
    ]
    return (
      <TodoList
        filteredTodos={todos}
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
      />
    )
  })
