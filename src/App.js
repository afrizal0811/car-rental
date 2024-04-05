import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RouteHandler from './RouteHandler'
import ScrollToTop from './utilities/scrollToTop'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop />
        <RouteHandler />
      </BrowserRouter>
    </div>
  )
}

export default App
