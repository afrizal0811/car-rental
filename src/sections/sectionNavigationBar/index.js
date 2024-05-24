import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from '../../components/bootstrapComponent'
import imagePath from '../../constants/imagePath'
import { deleteAllCookies } from '../../utilities/handleCookies'
import { deleteLocalStorage } from '../../utilities/handleStorage'
import './index.css'

const NavigationBar = (props) => {
  const { navigate, pathname, isLoggin } = props
  const showPathname = ['/login', '/register']
  const isShowElement = showPathname.includes(pathname)
  const navbarClass = isShowElement ? 'navi-white' : 'navigator'

  const handleLogin = () => {
    navigate('/login')
  }

  const handleLogout = () => {
    deleteLocalStorage()
    deleteAllCookies()
    handleLogin()
  }

  const navLink = (href, title) => (
    <Nav.Link href={href}>
      <p className='p-navi'>{title}</p>
    </Nav.Link>
  )

  const logo = (
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
  )

  return (
    <div>
      <Navbar
        key='md'
        expand='md'
        className={navbarClass}
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
                  variant={!isLoggin ? 'success' : 'danger'}
                  onClick={!isLoggin ? handleLogin : handleLogout}
                  hidden={isShowElement}
                  text={!isLoggin ? 'Login' : 'Logout'}
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
