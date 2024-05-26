import React from 'react'
import { Form } from 'react-bootstrap'

const BsFormGroup = (props) => {
  const { children, controlId, className, label, isInvalid } = props

  const renderError = isInvalid && (
    <span style={{ color: 'red' }}>*{isInvalid}</span>
  )
  
  return (
    <Form.Group
      controlId={controlId}
      className={className}
    >
      <Form.Label>
        {label} {renderError}
      </Form.Label>
      {children}
    </Form.Group>
  )
}

export default BsFormGroup
