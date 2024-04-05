import React from 'react'
import imagePath from '../../constants/imagePath'
import { showPathname } from '../../constants/pathnames'
import { list } from './help'
import './index.css'

const Footer = (props) => {
  const isShowElement = !showPathname.includes(props.pathname)
  const renderImage = (src) => (
    <img
      src={src}
      alt=''
      className='connect'
    />
  )
  return (
    <div hidden={isShowElement}>
      <div className='footer-container'>
        <div className='footer-detail'>
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo, 67213</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className='footer-list'>
          <ul className='menu-list'>
            {list.map((data, index) => (
              <li key={index}>
                <a href={data.link}>{data.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='footer-connect'>
          <p>Connect with us</p>
          <div>
            {renderImage(imagePath.iconFacebook)}
            {renderImage(imagePath.iconInstagram)}
            {renderImage(imagePath.iconTwitter)}
            {renderImage(imagePath.iconEmail)}
            {renderImage(imagePath.iconTwitch)}
          </div>
        </div>
        <div className='footer-copyright'>
          <p>Copyright &copy; 2022 Binar Car Rental</p>
          <div className='logo-square'>{renderImage(imagePath.logo)}</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
