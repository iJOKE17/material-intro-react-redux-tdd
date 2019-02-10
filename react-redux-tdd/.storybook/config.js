import React from 'react'
import { configure, addDecorator } from '@storybook/react';

addDecorator((story) => {
  return (
    <div className="todo-board">
      {story()}
    </div>
  )
})

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
