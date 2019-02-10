import React from 'react';
import 'todomvc-app-css/index.css'
import { storiesOf } from '@storybook/react';
import { FilterLinks } from '../containers/FilterLinks'

import Header from './Header'

storiesOf('Header', module)
  .add('Simple Header', () => {
    return (
      <Header />
    )
  })
