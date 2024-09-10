import React from 'react'
import './styled.css'

const StatusBar = (props) => {
  const { location } = props
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center gap-2'>
        <div className='d-flex gap-1'>
          <p className={`circle ${location[0]}`}>1</p>
          <span>Pilih Metode</span>
        </div>
        <p>-</p>
        <div className='d-flex gap-1'>
          <p className={`circle ${location[1]}`}>2</p>
          <span>Bayar</span>
        </div>
        <p>-</p>
        <div className='d-flex gap-1'>
          <p className={`circle ${location[2]}`}>3</p>
          <span>Tiket</span>
        </div>
      </div>
    </div>
  )
}

export default StatusBar
