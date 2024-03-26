import React from 'react'
import Faq from '../../components/sectionFaq'
import Hero from '../../components/sectionHero'
import Products from '../../components/sectionProducts'
import Services from '../../components/sectionServices'
import Sewa from '../../components/sectionSewa'
import Testimonial from '../../components/sectionTestimonial'
const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Products />
      <Testimonial />
      <Sewa />
      <Faq />
    </div>
  )
}

export default LandingPage
