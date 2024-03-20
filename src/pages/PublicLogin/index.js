import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BsButton from '../../components/bootstrapComponent/button/BsButton'
import BsFormControl from '../../components/bootstrapComponent/FormControl/BsFormControl'
import BsFormGroup from '../../components/bootstrapComponent/formGroup/BsFormGroup'
import imagePath from '../../constants/imagePath'
import './index.css'

const PublicLogin = () => {
  return (
    <section className='sign-section'>
      <div className='sign-form'>
        <div className='square'></div>
        <h1>Welcome Back!</h1>
        <Form>
          <BsFormGroup
            controlId='FormEmail'
            className='m-3'
            label='Email'
          >
            <BsFormControl
              type='email'
              placeholder='Contoh: johndee@gmail.com'
              name='email'
            />
          </BsFormGroup>
          <BsFormGroup
            controlId='FormPassword'
            className='m-3'
            label='Create Password'
          >
            <BsFormControl
              type='password'
              placeholder='6+ Password'
              name='password'
            />
          </BsFormGroup>
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
