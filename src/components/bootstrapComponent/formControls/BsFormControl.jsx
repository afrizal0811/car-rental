import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import './index.css'

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
  const [isVisible, setIsVisible] = useState({
    password: false,
    confirmPassword: false,
  })

  const handleOnClick = () => {
    setIsVisible((prev) => ({
      ...prev,
      [name]: !isVisible[name],
    }))
  }

  const feedbackComp = (
    <Form.Control.Feedback type='invalid'>{isInvalid}</Form.Control.Feedback>
  )
  const renderFeedback = isInvalid ? feedbackComp : null
  const visibleIcon = (
    <a
      onClick={handleOnClick}
      style={{ cursor: 'pointer' }}
      className='visible-icon'
    >
      <FontAwesomeIcon icon={isVisible[name] ? faEye : faEyeSlash} />
    </a>
  )

  const isTypePassword = type === 'password'

  return (
    <div>
      <div className='password-container '>
        <Form.Control
          autoComplete={autoComplete}
          isInvalid={isInvalid}
          minLength={minLength}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          type={!isVisible[`${name}`] ? 'password' : 'text'}
        />
        {isTypePassword && visibleIcon}
      </div>
      {renderFeedback}
    </div>
  )
}

export default BsFormControl
