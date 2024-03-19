import React from 'react'
import { useNavigate } from 'react-router-dom'
import BsButton from '../bootstrapComponent/button/BsButton'
import './index.css'

const Sewa = () => {
  const navigate = useNavigate()

  function handleSearch() {
    const token = localStorage.getItem('userIn')
    if (token) {
      navigate(`/cars`)
    } else navigate(`/login?redirectFrom=/cars`)
  }

  return (
    <div>
      <section className='sewa-section'>
        <div className='sewa-container'>
          <h1>Sewa Mobil di Jawa Timur Sekarang</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio
            blanditiis voluptatem libero sit quam nisi deserunt quas,
            exercitationem, rem porro quia atque aspernatur cum, ipsum nemo
            nihil vel sed.
          </p>
          <BsButton
            variant='success'
            onClick={handleSearch}
            text='Mulai Sewa Mobil'
          />
        </div>
      </section>
    </div>
  )
}

export default Sewa
