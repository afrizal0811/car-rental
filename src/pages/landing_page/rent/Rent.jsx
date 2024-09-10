import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { Button } from '../../../components/bootstrapComponent'
import color from '../../../constants/color'

const Rent = () => {
  const { navigate } = useOutletContext()
  const renderText = (className) => (
    <p className={`py-2 px-4 fs-6 fw-bolder ${className}`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio
      blanditiis voluptatem libero sit quam nisi deserunt quas, exercitationem,
      rem porro quia atque aspernatur cum, ipsum nemo nihil vel sed.
    </p>
  )

  return (
    <section className='w-100 h-auto p-2'>
      <div
        className='d-flex flex-column justify-content-center align-items-center text-white rounded mx-2 mx-lg-5 my-lg-3 text-center '
        style={{ backgroundColor: color.egyptianBlue, height: '500px' }}
      >
        <h1 className='py-2 px-4 fs-1 fw-bolder'>
          Sewa Mobil di Jawa Timur Sekarang
        </h1>
        {renderText('w-75 d-md-none')}
        {renderText('d-none d-md-flex flex-column w-50')}
        <Button
          variant='success'
          onClick={() => navigate(`/cars`)}
          text='Mulai Sewa Mobil'
        />
      </div>
    </section>
  )
}

export default Rent
