import React from 'react'
import { configure, addDecorator } from '@storybook/react';

addDecorator((story) => {
  return (
    <section className="main">
      {story()}
    </section>
  )
})

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
