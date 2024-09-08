import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { Button } from '../../../components/bootstrapComponent'
import imagePath from '../../../constants/imagePath'
import './Styled.css'

const Hero = () => {
  const { navigate, pathname } = useOutletContext()
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
            <div className='hero-button'>
              <Button
                hidden={pathname !== '/cars' ? false : true}
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
