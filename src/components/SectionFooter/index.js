import React from 'react'
import { useLocation } from 'react-router-dom'
import imagePath from '../../constants/imagePath'
import './index.css'

const Footer = () => {
  const locationFoot = useLocation()

  return (
    <div
      hidden={
        (locationFoot.pathname === '/login' ||
          locationFoot.pathname === '/register' ||
          locationFoot.pathname === '/admin') &&
        'true'
      }
    >
      <div className='footer-container'>
        <div className='footer-detail'>
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo, 67213</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className='footer-list'>
          <ul className='menu-list'>
            <li>
              <a href='#services'>Our Services</a>
            </li>
            <li>
              <a href='#products'>Why Us</a>
            </li>
            <li>
              <a href='#testi'>Testimonial</a>
            </li>
            <li>
              <a href='#faq'>FAQ</a>
            </li>
          </ul>
        </div>
        <div className='footer-connect'>
          <p>Connect with us</p>
          <div>
            <img
              src={imagePath.iconFacebook}
              alt=''
              className='connect'
            />
            <img
              src={imagePath.iconInstagram}
              alt=''
              className='connect'
            />
            <img
              src={imagePath.iconTwitter}
              alt=''
              className='connect'
            />
            <img
              src={imagePath.iconEmail}
              alt=''
              className='connect'
            />
            <img
              src={imagePath.iconTwitch}
              alt=''
              className='connect'
            />
          </div>
        </div>
        <div className='footer-copyright'>
          <p>Copyright &copy; 2022 Binar Car Rental</p>
          <div className='logo-square'>
            <img
              src={imagePath.logo}
              alt=''
              width={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
