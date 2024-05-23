import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {
  Alert,
  Button,
  FormControl,
  FormGroup,
} from '../../components/bootstrapComponent'
import imagePath from '../../constants/imagePath'
import handleButton from './help'
import './index.css'

const PublicLogin = () => {
  const {
    errors,
    handleChange,
    handleOnSubmit,
    isFailed,
    isLoading,
    validated,
    value,
  } = handleButton()

  const renderAlert = (
    <Alert
      variant='danger'
      text='Gagal! Email atau password salah.'
    />
  )

  return (
    <section className='sign-section'>
      <div className='sign-form'>
        {isFailed && renderAlert}
        <h1>Welcome Back!</h1>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleOnSubmit}
        >
          <FormGroup
            controlId='FormEmail'
            className='m-3'
            label='Email'
          >
            <FormControl
              isInvalid={validated && errors.email}
              name='email'
              onChange={handleChange}
              placeholder='Contoh: johndee@gmail.com'
              required
              type='email'
              value={value.email}
            />
          </FormGroup>
          <FormGroup
            controlId='FormPassword'
            className='m-3'
            label='Create Password'
          >
            <FormControl
              isInvalid={validated && errors.password}
              minLength={6}
              name='password'
              onChange={handleChange}
              placeholder='6+ Password'
              required
              type='password'
              value={value.password}
            />
          </FormGroup>
          <div className='d-grid gap-2'>
            <Button
              className='btn-submit'
              text='Sign In'
              type='submit'
              variant='primary'
              disabled={isLoading}
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
