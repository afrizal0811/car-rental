import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BsButton from '../../components/bootstrapComponent/button/BsButton'
import imagePath from '../../constants/imagePath'
import './index.css'

const PublicRegister = () => {
  const formGroup = (label, type, placeholder, name) => (
    <Form.Group
      className='mb-3'
      controlId='formBasicEmail'
    >
      <Form.Label>{label}</Form.Label>{' '}
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </Form.Group>
  )

  return (
    <section className='sign-section'>
      <div className='sign-form'>
        <div className='square'></div>
        <h1>Sign Up</h1>
        <Form>
          {formGroup('Email', 'email', 'Contoh: johndee@gmail.com', 'email')}
          {formGroup('Create Password', 'password', '6+ Password', 'password')}
          {formGroup('Confirm Password', 'password', '6+ Password', 'password')}
          <div className='d-grid gap-2'>
            <BsButton
              variant='primary'
              type='submit'
              className='btn-submit'
              text='Sign Up'
            />
          </div>
          <p>
            Already have an account?{' '}
            <Link
              to='/login'
              className='sign-link'
            >
              Sign In here
            </Link>
          </p>
        </Form>
      </div>
      <img
        src={imagePath.signIn}
        alt='sign-img'
        className='sign-img'
      />
    </section>
  )
}

export default PublicRegister
