import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { Button } from '../../../components/bootstrapComponent'
import color from '../../../constants/color'
import imagePath from '../../../constants/imagePath'

const Hero = () => {
  const { navigate, pathname } = useOutletContext()
  return (
    <div>
      <section
        className='d-flex flex-column flex-lg-row justify-content-center align-items-center w-100 h-auto'
        style={{ backgroundColor: color.aliceBlue }}
      >
        <div className='w-100 h-auto d-flex justify-content-center align-items-center flex-column p-4 py-lg-3 px-lg-5 '>
          <div>
            <h1 className='fw-bold fs-1'>
              Sewa & Rental Mobil Terbaik di kawasan Jawa Timur
            </h1>
            <p className='w-auto fs-6 lh-sm mb-3 fw-bolder'>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Button
              hidden={pathname !== '/cars' ? false : true}
              variant='success'
              onClick={() => navigate(`/cars`)}
              text='Mulai Sewa Mobil'
            />
          </div>
        </div>

        <div className='w-100 h-100  me-md-0 mt-lg-5'>
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
