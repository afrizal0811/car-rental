import { includes } from 'lodash'
import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import color from '../../constants/color'
import imagePath from '../../constants/imagePath'
import { deleteAllCookies } from '../../utilities/handleCookies'
import { deleteLocalStorage } from '../../utilities/handleStorage'
import { Button } from '../bootstrapComponent'
import { showPathname } from './help'

const NavigationBar = (props) => {
  const { context } = props
  const { navigate, pathname, params, isLoggin } = context
  const { id } = params
  const isShowElement = includes(showPathname(id), pathname)

  const handleLogin = () => {
    navigate('/auth/login')
  }

  const handleLogout = () => {
    deleteLocalStorage()
    deleteAllCookies()
    handleLogin()
  }

  const navLink = (href, title) => (
    <Nav.Link href={href}>
      <p className='m-0 text-black'>{title}</p>
    </Nav.Link>
  )

  const logo = (
    <Link
      to='/'
      className='ms-2 ms-md-5'
    >
      <img
        src={imagePath.logo}
        alt=''
        width={100}
      />
    </Link>
  )

  return (
    <Navbar
      key='md'
      expand='md'
      style={{ backgroundColor: !isShowElement && color.aliceBlue }}
      className={`py-3 ${isShowElement && 'bg-white shadow-sm'}`}
    >
      <Container fluid>
        {logo}
        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-md' />
        <Navbar.Offcanvas
          id='offcanvasNavbar-expand-md'
          aria-labelledby='offcanvasNavbar-expand-md'
          placement='end'
          style={{ width: '50%' }}
        >
          <Offcanvas.Header closeButton>{logo}</Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-5'>
              {navLink('/#services', 'Our Services')}
              {navLink('/#products', 'Why Us')}
              {navLink('/#testi', 'Testimonial')}
              {navLink('/#faq', 'FAQ')}
              <Button
                variant={!isLoggin ? 'outline-success' : 'outline-danger'}
                onClick={!isLoggin ? handleLogin : handleLogout}
                hidden={isShowElement}
                text={!isLoggin ? 'Login' : 'Logout'}
                className='px-1'
              />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
