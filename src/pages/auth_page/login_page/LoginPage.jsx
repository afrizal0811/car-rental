import React from 'react'
import { Form } from 'react-bootstrap'
import { Link, useOutletContext } from 'react-router-dom'
import {
  Alert,
  Button,
  FormControl,
  FormGroup,
} from '../../../components/bootstrapComponent'
import color from '../../../constants/color'
import validation from '../../../validation/validation'
import '../styled.css'

const LoginPage = (props) => {
  const { isLogin } = props
  const { navigate } = useOutletContext()
  const {
    errors,
    handleChange,
    handleOnSubmit,
    isLoading,
    isSubmitted,
    validated,
    value,
  } = validation(navigate, isLogin, false)

  const renderAlert = (
    <Alert
      variant='danger'
      text={errors.failedAlert}
    />
  )

  return (
    <div className='text-start px-3 m-4 px-lg-5 m-lg-0 flex-grow-1'>
      {isSubmitted && renderAlert}
      <h1 className='fw-bolder lh-sm fs-1 my-3'>Welcome Back!</h1>
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
          label='Password'
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
        <div className='d-grid gap-2'>
          <Button
            className='btn-submit'
            text='Sign In'
            type='submit'
            variant='primary'
            disabled={isLoading}
          />
        </div>
        <p className='mt-3'>
          Don&apos;t have an account?{' '}
          <Link
            to='/auth/register'
            className='fw-bold text-decoration-none'
            style={{ color: color.egyptianBlue }}
          >
            Sign Up for free
          </Link>
        </p>
      </Form>
    </div>
  )
}

export default LoginPage
