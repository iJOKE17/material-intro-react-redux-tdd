import React from 'react';
import 'todomvc-app-css/index.css'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { FilterLinks } from '../containers/FilterLinks'

import Footer from './Footer'

const renderFilterLinks = () => (
  <FilterLinks
    onSetVisiblityFilter={action('setVisiblityFilter')}
    visiblilityFilter={''}
  />
)

storiesOf('Footer', module)
  .add('With complete and active count', () => {
    return (
      <Footer
        completedCount={3}
        activeCount={5}
        renderFilterLinks={renderFilterLinks}
        onClearCompleted={action('clearCompleted')}
      />
    )
  })
  .add('With some filter links', () => {
    return (
      <Footer
        completedCount={3}
        activeCount={5}
        renderFilterLinks={renderFilterLinks}
        onClearCompleted={action('clearCompleted')}
      />
    )
  })
  .add('Without any active and completed items', () => {
    return (
      <Footer
        completedCount={0}
        activeCount={0}
        renderFilterLinks={renderFilterLinks}
        onClearCompleted={action('clearCompleted')}
      />
    )
  })
  .add('Without any active but still have some completed items', () => {
    return (
      <Footer
        completedCount={4}
        activeCount={0}
        renderFilterLinks={() => <FilterLinks />}
        onClearCompleted={action('clearCompleted')}
      />
    )
  })
