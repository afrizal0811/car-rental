import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
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
        <Accordion>
          {dataFaq.map((item, index) => {
            return (
              <Accordion.Item
                key={index}
                eventKey={index}
              >
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body>{item.answer}</Accordion.Body>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
