import React from 'react'
import Faq from './faq/Faq'
import Hero from './hero/Hero'
import Products from './products/Products'
import Services from './services/Services'
import Rent from './rent/Rent'
import Testimonial from './testimonial'

const LandingPage = (props) => {
  return (
    <div>
      <Hero {...props} />
      <Services />
      <Products />
      <Testimonial />
      <Rent {...props} />
      <Faq />
    </div>
  )
}

export default LandingPage
