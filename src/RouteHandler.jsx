import { includes, isNull } from 'lodash'
import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import LandingPage from './pages/landing_page/LandingPage'
import CarPage from './pages/car_page/CarPage'
import DetailsPage from './pages/details_page/DetailsPage'
import InstructionPage from './pages/instruction_page/InstructionPage'
import LoginPage from './pages/login_page/LoginPage'
import NotFound from './pages/not_found_page/NotFound'
import PaymentPage from './pages/payment_page/PaymentPage'
import RegisterPage from './pages/register_page/RegisterPage'
import TicketPage from './pages/ticket_page/TicketPage'
import Footer from './components/footer/Footer'
import NavigationBar from './components/navigation_bar/NavigationBar'
import { deleteAllCookies } from './utilities/handleCookies'
import { getLocalStorage } from './utilities/handleStorage'

const RouteHandler = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const isLoggin = !isNull(getLocalStorage('token'))

  useEffect(() => {
    const path = ['/', '/cars']
    const isDelete = includes(path, pathname)
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
