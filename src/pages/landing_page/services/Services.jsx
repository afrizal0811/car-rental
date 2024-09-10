import { map } from 'lodash'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import imagePath from '../../../constants/imagePath'
import './Styled.css'
import { dataServices } from './help'

const Services = () => {
  return (
    <Row
      id='services'
      className='m-3 p-3'
    >
      <Col
        sm='12'
        lg='6'
        className='d-flex justify-content-center align-items-center'
      >
        <img
          src={imagePath.services}
          alt='img-services'
          width='80%'
          height='auto'
        />
      </Col>
      <Col
        sm='12'
        lg='6'
        className='p-2 mt-4 mt-lg-0'
      >
        <h1 className='fs-1 fw-bold'>Best Car Rental for any kind of trip in East Java!</h1>
        <p className='fs-6 fw-bold'>
          Sewa mobil di Jawa Timur bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <ul className='services-list'>
          {map(dataServices, (data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </Col>
    </Row>
  )
}

export default Services
