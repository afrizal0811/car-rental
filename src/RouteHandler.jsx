import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import NotFound from './pages/notFound'
import LandingPage from './pages/LandingPage'
import CarPage from './pages/carPage'
import DetailsPage from './pages/detailsPage'
import InstructionPage from './pages/instructionPage'
import LoginPage from './pages/loginPage'
import PaymentPage from './pages/paymentPage'
import RegisterPage from './pages/registerPage'
import TicketPage from './pages/ticketPage'
import Footer from './sections/sectionFooter'
import NavigationBar from './sections/sectionNavigationBar'
import { deleteAllCookies } from './utilities/handleCookies'

const RouteHandler = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  useEffect(() => {
    const path = ['/', '/cars']
    const isDelete = path.includes(pathname)
    if (isDelete) deleteAllCookies()
  }, [pathname])

  return (
    <div>
      <NavigationBar
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
              navigate={navigate}
              pathname={pathname}
            />
          }
        />
        <Route
          path='/cars/:id'
          element={<DetailsPage navigate={navigate} />}
        />
        <Route
          path='/payment/:id'
          element={<PaymentPage navigate={navigate} />}
        />
        <Route
          path='/instruction/:id'
          element={<InstructionPage navigate={navigate} />}
        />
        <Route
          path='/ticket/:id'
          element={<TicketPage navigate={navigate} />}
        />
        <Route
          path='/login'
          element={<LoginPage pathname={pathname} />}
        />
        <Route
          path='/register'
          element={<RegisterPage pathname={pathname} />}
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
