import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RouteHandler from './RouteHandler'
import Footer from './components/sectionFooter'
import NavigationBar from './components/sectionNavigationBar'
import ScrollToTop from './utilities/scrollToTop'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop />
        <NavigationBar />
        <RouteHandler />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
