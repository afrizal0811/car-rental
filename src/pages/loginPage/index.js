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
import './index.css'

const PublicLogin = () => {
  const [isClicked, setIsClicked] = useState(false)
  const renderAlert = (
    <Alert
      variant='danger'
      text='Login gagal karena tidak dapat mengakses API'
    />
  )

  return (
    <section className='sign-section'>
      <div className='sign-form'>
        {isClicked && renderAlert}
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
              className='btn-submit'
              onClick={() => setIsClicked(true)}
              text='Sign In'
              type='button'
              variant='primary'
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
