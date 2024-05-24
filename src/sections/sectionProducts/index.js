import { map } from 'lodash'
import React from 'react'
import { Row } from 'react-bootstrap'
import CardComponent from './CardComponent'
import { dataProducts } from './help'
import './index.css'

const Products = () => {
  return (
    <section
      id='products'
      className='product-section'
    >
      <div className='product-title'>
        <h1>Why Us?</h1>
        <p>Mengapa harus pilih Binar Car Rental?</p>
      </div>
      <div className='product-card-container'>
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
