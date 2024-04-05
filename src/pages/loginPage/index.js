import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {
  Button,
  FormControl,
  FormGroup,
} from '../../components/bootstrapComponent'

import imagePath from '../../constants/imagePath'
import './index.css'

const PublicLogin = () => {
  return (
    <section className='sign-section'>
      <div className='sign-form'>
        <div className='square'></div>
        <h1>Welcome Back!</h1>
        <Form>
          <FormGroup
            controlId='FormEmail'
            className='m-3'
            label='Email'
          >
            <FormControl
              type='email'
              placeholder='Contoh: johndee@gmail.com'
              name='email'
            />
          </FormGroup>
          <FormGroup
            controlId='FormPassword'
            className='m-3'
            label='Create Password'
          >
            <FormControl
              type='password'
              placeholder='6+ Password'
              name='password'
            />
          </FormGroup>
          <div className='d-grid gap-2'>
            <Button
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
