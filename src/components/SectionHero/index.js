import React from 'react'
import imagePath from '../../constants/imagePath'
import BsButton from '../bootstrapComponent/button/BsButton'
import './index.css'

const Hero = (props) => {
  const { navigate, pathname } = props
  return (
    <div>
      <section className='hero-section'>
        <div className='hero-flex hero-content'>
          <div className='hero-title'>
            <h1>Sewa & Rental Mobil Terbaik di kawasan Jawa Timur</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <div
              className='hero-button'
              hidden={pathname !== '/cars' ? false : true}
            >
              <BsButton
                variant='success'
                onClick={() => navigate(`/cars`)}
                text='Mulai Sewa Mobil'
              />
            </div>
          </div>
        </div>
        <div className='hero-flex hero-image'>
          <img
            src={imagePath.hero}
            alt='img-car'
            width='100%'
            height='auto'
          />
        </div>
      </section>
    </div>
  )
}

export default Hero
