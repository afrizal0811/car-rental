import { includes, map } from 'lodash'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import color from '../../constants/color'
import imagePath from '../../constants/imagePath'
import { list, showPathname } from './help'

const Footer = (props) => {
  const { context } = props
  const { pathname } = context
  const isShowElement = includes(showPathname, pathname)
  const renderImage = (src, width = 40) => (
    <img
      alt=''
      className='px-1'
      src={src}
      width={width}
    />
  )

  return (
    <div hidden={!isShowElement}>
      <Row
        className='p-5 d-flex '
        style={{ backgroundColor: color.aliceBlue }}
      >
        <Col
          sm='12'
          md='3'
          className='lh-1'
        >
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo, 67213</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </Col>
        <Col
          sm='12'
          md='3'
        >
          <ul
            className='d-flex flex-column gap-1 p-0 w-75 m-auto'
            style={{ listStyleType: 'none' }}
          >
            {map(list, (data, index) => (
              <li key={index}>
                <a
                  href={data.link}
                  className='text-decoration-none text-black '
                >
                  {data.title}
                </a>
              </li>
            ))}
          </ul>
        </Col>
        <Col
          sm='12'
          md='3'
        >
          <p>Connect with us</p>
          <div>
            {renderImage(imagePath.iconFacebook)}
            {renderImage(imagePath.iconInstagram)}
            {renderImage(imagePath.iconTwitter)}
            {renderImage(imagePath.iconEmail)}
            {renderImage(imagePath.iconTwitch)}
          </div>
        </Col>
        <Col
          sm='12'
          md='3'
        >
          <p>Copyright &copy; 2022 Binar Car Rental</p>
          {renderImage(imagePath.logo, 100)}
        </Col>
      </Row>
    </div>
  )
}

export default Footer
