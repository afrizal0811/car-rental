import React from 'react'
import { Accordion } from '../bootstrapComponent'
import { dataFaq } from './help'
import './index.css'

const Faq = () => {
  return (
    <section
      id='faq'
      className='faq-section'
    >
      <div className='faq-title'>
        <h1>Frequently Asked Question</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className='faq-content'>
        {dataFaq.map((item, index) => {
          return (
            <Accordion
              header={item.question}
              key={index}
            >
              {item.answer}
            </Accordion>
          )
        })}
      </div>
    </section>
  )
}

export default Faq
