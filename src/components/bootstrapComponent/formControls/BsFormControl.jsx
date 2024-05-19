import React from 'react'
import { Form } from 'react-bootstrap'

const BsFormControl = (props) => {
  const { name, type, placeholder, autoComplete } = props
  return (
    <Form.Control
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  )
}

export default BsFormControl
