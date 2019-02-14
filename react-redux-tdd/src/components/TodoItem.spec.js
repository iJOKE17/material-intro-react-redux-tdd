import React from 'react'
import { shallow } from 'enzyme'

import TodoItem from './TodoItem'

describe('TodoItem', () => {
  it('should switch to edit mode once click', () => {
    const noop = () => { }
    const todo = {
      id: 1,
      text: 'hello',
      completed: false
    }
    const wrapper = shallow(
      <TodoItem
        todo={todo}
        editTodo={noop}
        deleteTodo={noop}
        completeTodo={noop}
      />
    )
    expect(wrapper.exists('.ax-todo-input-mode')).toBeFalsy()
    wrapper.find('.ax-todo-label').simulate('doubleclick')
    expect(wrapper.exists('.ax-todo-input-mode')).toBeTruthy()
  })
})
