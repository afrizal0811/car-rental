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

const PublicRegister = () => {
  const [isClicked, setIsClicked] = useState(false)
  const renderAlert = (
    <Alert
      variant='danger'
      text='Register gagal karena tidak dapat mengakses API'
    />
  )

  return (
    <section className='sign-section'>
      <div className='sign-form'>
        {isClicked && renderAlert}
        <h1>Sign Up</h1>
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
          <FormGroup
            controlId='FormPasswordConfirm'
            className='m-3'
            label='Confirm Password'
          >
            <FormControl
              type='password'
              placeholder='6+ Password'
              name='confirm-password'
            />
          </FormGroup>
          <div className='d-grid gap-2'>
            <Button
              className='btn-submit'
              onClick={() => setIsClicked(true)}
              text='Sign Up'
              type='button'
              variant='primary'
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
