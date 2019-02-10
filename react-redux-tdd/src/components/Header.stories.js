import React from 'react';
import '../index.css'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Header from './Header'

storiesOf('Header', module)
  .add('Simple Header', () => {
    return (
      <Header addTodo={action('addTodo')}/>
    )
  })
