import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BsAccordion from '../../components/bootstrapComponent/accordion/BsAccordion'
import BsButton from '../../components/bootstrapComponent/button/BsButton'
import BsCard from '../../components/bootstrapComponent/card/BsCard'
import CurrencyComp from '../../components/currencyComp/CurrencyComp'
import carList from '../../constants/carList'
import localDateString from '../../utilities/localDateString'
import { setCookies } from '../../utilities/handleCookies'
import { dataList } from './help'
import './index.css'

const DetailCar = () => {
  const [tanggal, setTanggal] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()
  const dateNow = new Date()
  const endDate = (date, days) => {
    let result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }
  const selectedCar = carList.find((data) => data.id === parseInt(id))

  function handleViewDetail(id) {
    const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
    const lamaHari = Math.round(Math.abs((tanggal[0] - tanggal[1]) / oneDay))
    const tanggalAwal = localDateString(tanggal[0])
    const tanggalAkhir = localDateString(tanggal[1])
    const cookies = [
      { name: 'tanggalAwal', value: tanggalAwal },
      { name: 'tanggalAkhir', value: tanggalAkhir },
      { name: 'lamaHari', value: lamaHari },
      { name: 'car', value: selectedCar },
    ]
    setCookies(cookies)
    navigate(`/payment/${id}`)
  }

  const renderDataList = (
    <ul className='detail-list'>
      {dataList.map((data, index) => (
        <li key={index}>{data}</li>
      ))}
    </ul>
  )

  return (
    <div key={selectedCar.id}>
      <div className='hero-div' />
      <div className='detail-section'>
        <BsCard
          title='Tentang Paket'
          info='Include'
          className='card-detail'
        >
          {renderDataList}
          <BsAccordion header='Refund, Reschedule, Overtime'>
            {renderDataList}
          </BsAccordion>
        </BsCard>
        <BsCard
          data={selectedCar}
          info='Tentukan lama sewa mobil (max. 7 hari)'
          infoClass='date-picker'
          className='card-detail-total'
          isHaveImage='true'
        >
          <DateRangePicker
            onChange={setTanggal}
            value={tanggal}
            format='dd-MM-y'
            minDate={dateNow}
            maxDate={endDate(dateNow, 6)}
            rangeDivider={' to '}
            className='tggl'
          />
          <strong className='d-flex justify-content-between mt-5'>
            <p>Total</p>
            <CurrencyComp value={selectedCar.price} />
          </strong>
          <div className='d-grid mt-auto'>
            <BsButton
              variant='success'
              disabled={!tanggal}
              onClick={() => handleViewDetail(`${id}`)}
              text='Lanjutkan Pembayaran'
            />
          </div>
        </BsCard>
      </div>
    </div>
  )
}

export default DetailCar
