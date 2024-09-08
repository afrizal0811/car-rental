import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import CarPage from './pages/car_page/CarPage'
import DetailsPage from './pages/details_page/DetailsPage'
import InstructionPage from './pages/instruction_page/InstructionPage'
import LandingPage from './pages/landing_page/LandingPage'
import LoginPage from './pages/login_page/LoginPage'
import NotFound from './pages/not_found_page/NotFound'
import PaymentPage from './pages/payment_page/PaymentPage'
import RegisterPage from './pages/register_page/RegisterPage'
import TicketPage from './pages/ticket_page/TicketPage'

const RouteHandler = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path='/'
          element={<LandingPage />}
        />
        <Route
          path='/cars'
          element={<CarPage />}
        />
        <Route
          path='/cars/:id'
          element={<DetailsPage />}
        />
        <Route
          path='/payment/:id'
          element={<PaymentPage />}
        />
        <Route
          path='/instruction/:id'
          element={<InstructionPage />}
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
          element={<NotFound />}
          path='404'
        />
        <Route
          element={
            <Navigate
              replace
              to='404'
            />
          }
          path='*'
        />
      </Route>
    </Routes>
  )
}

export default RouteHandler
