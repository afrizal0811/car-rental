import { map } from 'lodash'
import React from 'react'
import { Accordion } from '../../../components/bootstrapComponent'
import { dataFaq } from './help'

const Faq = () => {
  const renderAccordion = (className) => (
    <div className={className}>
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
  )

  return (
    <section
      id='faq'
      className='d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-between p-3 p-md-4 w-100 h-auto'
    >
      <div className='w-auto mb-2 text-center text-md-start'>
        <h1 className='fw-bolder lh-1 fs-2'>Frequently Asked Question</h1>
        <p className='fw-light fs-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {renderAccordion('w-75 d-md-none')}
      {renderAccordion('d-none d-md-flex flex-column w-50')}
    </section>
  )
}

export default Faq
