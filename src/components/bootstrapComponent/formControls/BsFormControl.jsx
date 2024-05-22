import React from 'react'
import { Form } from 'react-bootstrap'

const BsFormControl = (props) => {
  const {
    autoComplete,
    isInvalid,
    name,
    onChange,
    placeholder,
    required,
    type,
    minLength,
  } = props

  const feedbackComp = (
    <Form.Control.Feedback type='invalid'>{isInvalid}</Form.Control.Feedback>
  )

  const renderFeedback = isInvalid ? feedbackComp : null
  return (
    <div>
      <Form.Control
        autoComplete={autoComplete}
        isInvalid={isInvalid}
        minLength={minLength}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        type={type}
      />
      {renderFeedback}
    </div>
  )
}

export default BsFormControl
