import React from 'react';
import 'todomvc-app-css/index.css'
import { storiesOf } from '@storybook/react';

import Footer from './Footer'

storiesOf('Footer', module)
  .add('With complete and active count', () => {
    return (
      <Footer completedCount={3} activeCount={5} />
    )
  })
