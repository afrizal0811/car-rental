import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const BsAccordion = (props) => {
  const { header, index, children } = props
  return (
    <Accordion>
      <Accordion.Item
        eventKey='0'
        key={index}
      >
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body>{children}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default BsAccordion
