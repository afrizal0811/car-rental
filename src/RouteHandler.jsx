import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './components/notFound'
import Faq from './components/sectionFaq'
import Products from './components/sectionProducts'
import Services from './components/sectionServices'
import Testimonial from './components/sectionTestimonial'
import CarList from './pages/carPage'
import DetailCar from './pages/detailsPage'
import LandingPage from './pages/landingPage'
import PayInstruction from './pages/instructionPage'
import PaymentCar from './pages/paymentPage'
import PublicLogin from './pages/loginPage'
import PublicRegister from './pages/registerPage'
import Ticket from './pages/ticketPage'

const RouteHandler = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<LandingPage />}
      />
      <Route
        path='/services'
        element={<Services />}
      />
      <Route
        path='/products'
        element={<Products />}
      />
      <Route
        path='/testi'
        element={<Testimonial />}
      />
      <Route
        path='/faq'
        element={<Faq />}
      />
      <Route
        path='/cars'
        element={<CarList />}
      />
      <Route
        path='/cars/:id'
        element={<DetailCar />}
      />
      <Route
        path='/payment/:id'
        element={<PaymentCar />}
      />
      <Route
        path='/instruction/:id'
        element={<PayInstruction />}
      />
      <Route
        path='/ticket/:id'
        element={<Ticket />}
      />
      <Route
        path='/login'
        element={<PublicLogin />}
      />
      <Route
        path='/register'
        element={<PublicRegister />}
      />
      <Route
        path='*'
        element={<NotFound />}
      />
    </Routes>
  )
}

export default RouteHandler
