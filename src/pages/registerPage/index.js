import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {
  Alert,
  Button,
  FormControl,
  FormGroup,
} from '../../components/bootstrapComponent'
import imagePath from '../../constants/imagePath'
import validation from '../../validation/validation'
import './index.css'

const RegisterPage = (props) => {
  const {
    errors,
    handleChange,
    handleOnSubmit,
    isLoading,
    isSubmitted,
    validated,
    value,
  } = validation(props)

  const renderAlert = (
    <Alert
      variant='danger'
      text={errors.failedAlert}
    />
  )

  return (
    <section className='sign-section'>
      <div className='sign-form'>
        {isSubmitted && renderAlert}
        <h1>Sign Up</h1>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleOnSubmit}
        >
          <FormGroup
            className='m-3'
            controlId='FormEmail'
            isInvalid={validated && errors.email}
            label='Email'
          >
            <FormControl
              name='email'
              onChange={handleChange}
              placeholder='Contoh: johndee@gmail.com'
              required
              type='email'
              value={value.email}
            />
          </FormGroup>
          <FormGroup
            className='m-3'
            controlId='FormPassword'
            isInvalid={validated && errors.password}
            label='Create Password'
          >
            <FormControl
              minLength={6}
              name='password'
              onChange={handleChange}
              placeholder='6+ Password'
              required
              type='password'
              value={value.password}
            />
          </FormGroup>
          <FormGroup
            className='m-3'
            controlId='FormPasswordConfirm'
            isInvalid={validated && errors.confirmPassword}
            label='Confirm Password'
          >
            <FormControl
              minLength={6}
              name='confirmPassword'
              onChange={handleChange}
              placeholder='6+ Password'
              required
              type='password'
              value={value.confirmPassword}
            />
          </FormGroup>
          <div className='d-grid gap-2'>
            <Button
              className='btn-submit'
              text='Sign Up'
              type='submit'
              variant='primary'
              disabled={isLoading}
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

export default RegisterPage
