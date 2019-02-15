import React from 'react';
import '../index.css'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TodoSearch from './TodoSearch'

const actions = {
    editTodo: action('EditTodo'),
    deleteTodo: action('deleteTodo'),
    completeTodo: action('completeTodo')
}
const items = [
    {id:1, name: 'React'},
    {id:2, name: 'Vue'},
    {id:3, name: 'Angular'},
]

storiesOf('TodoSearch', module)
.add('Empty', () => {
    const todos = [
    ]
    return (
      <TodoSearch
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
        id: 1,

      },
      {
        text: 'Use Node',
        completed: false,
        id: 2
      },
      {
        text: 'Importent',
        completed: false,
        id: 3,
        importent: true
      },
    ]
    return (
      <TodoSearch
        filteredTodos={todos}
        actions={actions}
      />
    )
  })