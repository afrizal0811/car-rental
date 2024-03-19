import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import imagePath from '../../constants/imagePath'
import './index.css'
import BsButton from '../../components/bootstrapComponent/button/BsButton'

const PublicLogin = () => {
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
        <h1>Welcome Back!</h1>
        <Form>
          {formGroup('Email', 'email', 'Contoh: johndee@gmail.com', 'email')}
          {formGroup('Password', 'password', '6+ Password', 'password')}
          <div className='d-grid gap-2'>
            <BsButton
              variant='primary'
              type='submit'
              className='btn-submit'
              text='Sign In'
            />
          </div>
          <p>
            Don&apos;t have an account?{' '}
            <Link
              to='/register'
              className='sign-link'
            >
              Sign Up for free
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

export default PublicLogin
