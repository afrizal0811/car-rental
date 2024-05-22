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
import handleButton from './help'
import './index.css'

const PublicRegister = () => {
  const {
    errors,
    handleChange,
    handleOnSubmit,
    isLoading,
    isSubmitted,
    validated,
    value,
  } = handleButton()

  const renderAlert = (
    <Alert
      variant='success'
      text='Berhasil! Silahkan login dengan akun yang sudah dibuat'
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
            controlId='FormEmail'
            className='m-3'
            label='Email'
          >
            <FormControl
              isInvalid={validated && errors.email}
              minLength={6}
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
          <FormGroup
            controlId='FormPasswordConfirm'
            className='m-3'
            label='Confirm Password'
          >
            <FormControl
              isInvalid={validated && errors.confirmPassword}
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

export default PublicRegister
