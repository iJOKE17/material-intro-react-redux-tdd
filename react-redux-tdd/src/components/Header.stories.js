import React from 'react';
import '../index.css'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { InputModes } from '../reducers/inputMode'

import Header from './Header'

storiesOf('Header', module)
  .add('Simple Header in add mode', () => {
    return (
      <Header inputMode={InputModes.ADD} addTodo={action('addTodo')}/>
    )
  })
  .add('Simple Header in search mode', () => {
    return (
      <Header inputMode={InputModes.SEARCH} addTodo={action('addTodo')}/>
    )
  })
