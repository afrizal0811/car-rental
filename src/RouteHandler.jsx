import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import CarPage from './pages/carPage'
import DetailsPage from './pages/detailsPage'
import InstructionPage from './pages/instructionPage'
import LoginPage from './pages/loginPage'
import NotFound from './pages/notFound'
import PaymentPage from './pages/paymentPage'
import RegisterPage from './pages/registerPage'
import TicketPage from './pages/ticketPage'
import Footer from './sections/sectionFooter'
import NavigationBar from './sections/sectionNavigationBar'
import { deleteAllCookies } from './utilities/handleCookies'
import { getLocalStorage } from './utilities/handleStorage'
import { isNull } from 'lodash'

const RouteHandler = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const isLoggin = !isNull(getLocalStorage('token'))

  useEffect(() => {
    const path = ['/', '/cars']
    const isDelete = path.includes(pathname)
    if (isDelete) deleteAllCookies()
  }, [pathname])

  return (
    <div>
      <NavigationBar
        isLoggin={isLoggin}
        navigate={navigate}
        pathname={pathname}
      />
      <Routes>
        <Route
          path='/'
          element={
            <LandingPage
              navigate={navigate}
              pathname={pathname}
            />
          }
        />
        <Route
          path='/cars'
          element={
            <CarPage
              isLoggin={isLoggin}
              navigate={navigate}
              pathname={pathname}
            />
          }
        />
        <Route
          path='/cars/:id'
          element={
            <DetailsPage
              isLoggin={isLoggin}
              navigate={navigate}
            />
          }
        />
        <Route
          path='/payment/:id'
          element={
            <PaymentPage
              isLoggin={isLoggin}
              navigate={navigate}
            />
          }
        />
        <Route
          path='/instruction/:id'
          element={
            <InstructionPage
              isLoggin={isLoggin}
              navigate={navigate}
            />
          }
        />
        <Route
          path='/ticket/:id'
          element={
            <TicketPage
              isLoggin={isLoggin}
              navigate={navigate}
            />
          }
        />
        <Route
          path='/login'
          element={
            <LoginPage
              navigate={navigate}
              pathname={pathname}
            />
          }
        />
        <Route
          path='/register'
          element={
            <RegisterPage
              navigate={navigate}
              pathname={pathname}
            />
          }
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <Footer pathname={pathname} />
    </div>
  )
}

export default RouteHandler
