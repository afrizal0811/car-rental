import React, { useEffect } from 'react'
import Faq from '../../sections/sectionFaq'
import Hero from '../../sections/sectionHero'
import Products from '../../sections/sectionProducts'
import Services from '../../sections/sectionServices'
import Sewa from '../../sections/sectionSewa'
import Testimonial from '../../sections/sectionTestimonial'
import { deleteAllCookies } from '../../utilities/handleCookies'

const LandingPage = (props) => {
  useEffect(() => {
    if (props.pathname === '/') deleteAllCookies()
  }, [props.pathname])

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
