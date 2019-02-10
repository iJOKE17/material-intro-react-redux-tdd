import React from 'react'
import Header from '../containers/Header'
import MainSection from '../containers/MainSection'

const App = () => (
  <div>
    <h1>Todo in React-Redux</h1>
    <div className='todo-board'>
      <Header />
      <MainSection />
    </div>
  </div>
)

export default App
