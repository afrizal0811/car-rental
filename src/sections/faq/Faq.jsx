import { map } from 'lodash'
import React from 'react'
import { Accordion } from '../../components/bootstrapComponent'
import { dataFaq } from './help'
import './Styled.css'

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
        {map(dataFaq, (item, index) => {
          return (
            <Accordion
              header={item.question}
              key={index}
              index={index}
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
