import React from 'react'
import { Card, Col } from 'react-bootstrap'

const CardComponent = (props) => {
  const { produk, text, icon } = props

  return (
    <Col
      sm='12'
      md='6'
      lg='6'
      xl='3'
      className='p-2'
    >
      <Card className='p-3 mx-4 mx-md-0 h-100'>
        <img
          src={icon}
          width={35}
          height={35}
        />
        <h1 className='w-auto mt-3 fs-4 fw-bold'>{produk}</h1>
        <p className='w-auto fs-6 lh-sm my-1 fw-light'>{text}</p>
      </Card>
    </Col>
  )
}

export default CardComponent
