import { map } from 'lodash'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import color from '../../../constants/color'
import './Styled.css'
import { dataTestimonials, sliderSetting } from './help'
const Testimonial = () => {
  const renderTestiImage = (item) => (
    <div className='pb-2'>
      <img
        src={item.icon}
        alt='icon'
        width={100}
      />
    </div>
  )
  const renderTestiText = (item) => (
    <div>
      <div className='d-flex justify-content-center'>
        <i className='fa fa-star' />
        <i className='fa fa-star' />
        <i className='fa fa-star' />
        <i className='fa fa-star' />
        <i className='fa fa-star' />
      </div>
      <div>
        <p className='fw-bold my-2 fs-6 lh-sm'>{item.text}</p>
        <p className='fw-light'>
          {item.name} {item.age}, {item.location}
        </p>
      </div>
    </div>
  )
  return (
    <section
      id='testi'
      className='m-3 px-2 mb-4'
    >
      <div className='w-auto text-center'>
        <h1 className='fs-1 fw-bold lh-sm'>Testimonial</h1>
        <p className='fs-6 fw-bold'>
          Berbagai review positif dari para pelanggan kami
        </p>
      </div>
      <div className='d-flex justify-content-center align-items-center h-auto'>
        <Slider
          {...sliderSetting}
          style={{ width: '95%' }}
        >
          {map(dataTestimonials, (item, index) => {
            return (
              <Row key={index}>
                <Col className='p-2'>
                  <Card
                    className='d-flex justify-content-center align-items-center p-4 m-2'
                    style={{ backgroundColor: color.aliceBlue }}
                  >
                    {renderTestiImage(item)}
                    {renderTestiText(item)}
                  </Card>
                </Col>
              </Row>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

export default Testimonial
