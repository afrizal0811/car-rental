import { isNull } from 'lodash'
import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Footer from './components/footer/Footer'
import NavigationBar from './components/navigation_bar/NavigationBar'
import { getLocalStorage } from './utilities/handleStorage'

const Layout = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isLoggin = !isNull(getLocalStorage('token'))
  const context = {
    navigate,
    pathname,
    isLoggin,
  }
  return (
    <div>
      <NavigationBar context={context} />
      <Outlet context={context} />
      <Footer context={context} />
    </div>
  )
}

export default Layout