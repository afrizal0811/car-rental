import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RouteHandler from './RouteHandler'
import Footer from './components/sectionFooter'
import NavigationBar from './components/sectionNavigationBar'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavigationBar />
        <RouteHandler />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
