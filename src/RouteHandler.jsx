import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import AuthPage from './pages/auth_page/AuthPage'
import CarPage from './pages/car_page/CarPage'
import DetailsPage from './pages/details_page/DetailsPage'
import InstructionPage from './pages/instruction_page/InstructionPage'
import LandingPage from './pages/landing_page/LandingPage'
import NotFound from './pages/not_found_page/NotFound'
import PaymentPage from './pages/payment_page/PaymentPage'
import TicketPage from './pages/ticket_page/TicketPage'

const RouteHandler = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path='/auth/:type'
          element={<AuthPage />}
        />
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
