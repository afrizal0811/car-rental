import React from 'react'
import { Button } from 'react-bootstrap'

const BsButton = (props) => {
  const { icon, variant, type, className, text, onClick, hidden, id, disabled } = props || ''
  return (
    <Button
      variant={variant}
      type={type}
      onClick={onClick}
      className={className}
      hidden={hidden}
      id={id}
      disabled={disabled}
    >
      {icon} {text}
    </Button>
  )
}

export default BsButton
