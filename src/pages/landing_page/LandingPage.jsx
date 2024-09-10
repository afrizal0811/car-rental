import React, { useEffect } from 'react'
import { deleteAllCookies } from '../../utilities/handleCookies'
import Faq from './faq/Faq'
import Hero from './hero/Hero'
import Products from './products/Products'
import Rent from './rent/Rent'
import Services from './services/Services'
import Testimonial from './testimonial/Testimonial'

const LandingPage = () => {
  useEffect(() => {
    deleteAllCookies()
  }, [])
  
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
