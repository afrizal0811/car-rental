import { map } from 'lodash'
import React from 'react'
import imagePath from '../../constants/imagePath'
import { dataServices } from './help'
import './index.css'

const Services = () => {
  return (
    <section
      id='services'
      className='services-section'
    >
      <div className='services-flex services-image'>
        <img
          src={imagePath.services}
          alt='img-services'
          width='80%'
          height='auto'
        />
      </div>
      <div className='services-flex services-content'>
        <div className='services-title'>
          <h1>Best Car Rental for any kind of trip in East Java!</h1>
          <p>
            Sewa mobil di Jawa Timur bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <ul className='services-list'>
            {map(dataServices, (data, index) => (
              <li key={index}>{data}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services
