import React from 'react'
import { Form } from 'react-bootstrap'

const BsFormGroup = (props) => {
  const { children, controlId, className, label } = props
  return (
    <Form.Group
      controlId={controlId}
      className={className}
    >
      <Form.Label>{label}</Form.Label>
      {children}
    </Form.Group>
  )
}

export default BsFormGroup
