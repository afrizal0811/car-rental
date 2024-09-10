import { map } from 'lodash'
import React from 'react'
import { Row } from 'react-bootstrap'
import CardComponent from './CardComponent'
import { dataProducts } from './help'

const Products = () => {
  return (
    <section
      id='products'
      className='w-100 h-auto p-2 py-lg-3 px-lg-5 '
    >
      <div className='w-auto text-center text-lg-start'>
        <h1 className='fw-bolder lh-sm fs-2'>Why Us?</h1>
        <p className='fw-bolder fs-6'>Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div className='h-auto'>
        <Row>
          {map(dataProducts, (item, index) => (
            <CardComponent
              key={index}
              produk={item.produk}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Products
