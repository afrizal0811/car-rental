import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const BsAccordion = (props) => {
  const { header, key, children } = props
  return (
    <Accordion key={key}>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body>{children}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default BsAccordion
