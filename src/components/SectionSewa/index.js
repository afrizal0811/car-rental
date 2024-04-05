import React from 'react'
import { Button } from '../bootstrapComponent'
import './index.css'

const Sewa = (props) => {
  return (
    <section className='sewa-section'>
      <div className='sewa-container'>
        <h1>Sewa Mobil di Jawa Timur Sekarang</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio
          blanditiis voluptatem libero sit quam nisi deserunt quas,
          exercitationem, rem porro quia atque aspernatur cum, ipsum nemo nihil
          vel sed.
        </p>
        <Button
          variant='success'
          onClick={() => props.navigate(`/cars`)}
          text='Mulai Sewa Mobil'
        />
      </div>
    </section>
  )
}

export default Sewa
