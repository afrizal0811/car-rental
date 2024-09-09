import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div
      className='d-flex justify-content-center align-items-center mw-100 mh-100'
      style={{ height: '100dvh' }}
    >
      <div className='d-flex flex-column justify-content-center align-items-center h-100 w-100 '>
        <h1 style={{ color: '#0d28a6', fontSize: '10rem' }}>404</h1>
        <h3>Page Not Founds</h3>
        <p className='text-center w-75 text-break'>
          Maybe this page moved? Got deleted? Is hiding in quarantine? Never
          existed in the first place?
        </p>

        <p>
          Let&apos;s go{' '}
          <Link
            to='/'
            className='text-decoration-none'
            style={{ color: '#0d28a6' }}
          >
            {' '}
            home{' '}
          </Link>{' '}
          and try from there.
        </p>
      </div>
    </div>
  )
}

export default NotFound
