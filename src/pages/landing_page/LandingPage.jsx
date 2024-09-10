import React from 'react'
import Faq from './faq/Faq'
import Hero from './hero/Hero'
import Products from './products/Products'
import Rent from './rent/Rent'
import Services from './services/Services'
import Testimonial from './testimonial/Testimonial'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Products />
      <Testimonial />
      <Rent />
      <Faq />
    </div>
  )
}

export default LandingPage
