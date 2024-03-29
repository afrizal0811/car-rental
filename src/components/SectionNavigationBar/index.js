import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import imagePath from '../../constants/imagePath'
import { hiddenPathname } from '../../constants/pathnames'
import BsButton from '../bootstrapComponent/button/BsButton'
import './index.css'

const NavigationBar = (props) => {
  const { navigate, pathname } = props
  const hiddenRegister = hiddenPathname.includes(pathname)
  const navbarClass = hiddenPathname.includes(pathname)
    ? 'navi-white'
    : 'navigator'

  const navLink = (href, title) => (
    <Nav.Link href={href}>
      <p className='p-navi'>{title}</p>
    </Nav.Link>
  )

  return (
    <div>
      <Navbar
        key='md'
        expand='md'
        className={navbarClass}
      >
        <Container fluid>
          <Link
            to='/'
            className='brand-logo'
          >
            <img
              src={imagePath.logo}
              alt=''
              width={100}
            />
          </Link>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
          <Navbar.Offcanvas
            id='offcanvasNavbar-expand-md'
            aria-labelledby='offcanvasNavbar-expand-md'
            placement='end'
            style={{ width: '50%' }}
          >
            <Offcanvas.Header closeButton>
              <Link
                to='/'
                className='offset-brand-logo'
              >
                <p>BCR</p>
                <Navbar.Brand href='#' />
              </Link>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-5'>
                {navLink('/#services', 'Our Services')}
                {navLink('/#products', 'Why Us')}
                {navLink('/#testi', 'Testimonial')}
                {navLink('/#faq', 'FAQ')}
                <BsButton
                  variant='success'
                  onClick={() => navigate('/register')}
                  hidden={hiddenRegister}
                  text='Register'
                />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
