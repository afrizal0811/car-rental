import React from 'react'
import { Alert } from 'react-bootstrap'

const BsAlert = (props) => {
  const { variant, text } = props

  return (
    <Alert
      key={variant}
      variant={variant}
    >
      {text}
    </Alert>
  )
}

export default BsAlert
