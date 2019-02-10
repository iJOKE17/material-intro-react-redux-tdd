import React from 'react';
import 'todomvc-app-css/index.css'
import { storiesOf } from '@storybook/react';
import { FilterLinks } from '../containers/FilterLinks'

import Footer from './Footer'

storiesOf('Footer', module)
  .add('With complete and active count', () => {
    return (
      <Footer
        completedCount={3}
        activeCount={5}
        renderFilterLinks={() => null}
      />
    )
  })
  .add('With some filter links', () => {
    return (
      <Footer
        completedCount={3}
        activeCount={5}
        renderFilterLinks={() => <FilterLinks />}
      />
    )
  })
