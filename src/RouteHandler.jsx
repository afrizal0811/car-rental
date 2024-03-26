import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import NotFound from './components/notFound'
import Footer from './components/sectionFooter'
import NavigationBar from './components/sectionNavigationBar'
import CarPage from './pages/carPage'
import DetailsPage from './pages/detailsPage'
import InstructionPage from './pages/instructionPage'
import LandingPage from './pages/landingPage'
import LoginPage from './pages/loginPage'
import PaymentPage from './pages/paymentPage'
import RegisterPage from './pages/registerPage'
import TicketPage from './pages/ticketPage'

const RouteHandler = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

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
          element={<CarPage navigate={navigate} />}
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
          element={<TicketPage />}
        />
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/register'
          element={<RegisterPage />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      <Footer
        pathname={pathname}
      />
    </div>
  )
}

export default RouteHandler
