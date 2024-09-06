import React from 'react'
import Faq from '../../sections/faq/Faq'
import Hero from '../../sections/hero/Hero'
import Products from '../../sections/products/Products'
import Services from '../../sections/services/Services'
import Sewa from '../../sections/sewa/Sewa'
import Testimonial from '../../sections/testimonial'

const LandingPage = (props) => {
  return (
    <div>
      <Hero {...props} />
      <Services />
      <Products />
      <Testimonial />
      <Sewa {...props} />
      <Faq />
    </div>
  )
}

export default LandingPage
