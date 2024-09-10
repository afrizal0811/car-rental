import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import { find, map } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom'
import { Accordion, Button, Card } from '../../components/bootstrapComponent'
import carList from '../../constants/carList'
import { setCookies } from '../../utilities/handleCookies'
import {
  localeDateAllNumber,
  localePriceFormat,
} from '../../utilities/handleLocale'
import './Styled.css'
import { dataList, dateNow, endDate } from './help'

const DetailsPage = () => {
  const { isLoggin, navigate, params } = useOutletContext()
  const { id } = params
  const [tanggal, setTanggal] = useState('')
  const selectedCar = find(carList, { id: parseInt(id) })

  useEffect(() => {
    if (!isLoggin) {
      navigate('/auth/login', { replace: true })
    }
  }, [])

  function handleViewDetail(id) {
    const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
    const lamaHari = Math.round(Math.abs((tanggal[0] - tanggal[1]) / oneDay))
    const tanggalAwal = localeDateAllNumber(tanggal[0])
    const tanggalAkhir = localeDateAllNumber(tanggal[1])
    const cookies = [
      { name: 'tanggalAwal', value: tanggalAwal },
      { name: 'tanggalAkhir', value: tanggalAkhir },
      { name: 'lamaHari', value: lamaHari },
      { name: 'car', value: selectedCar },
    ]
    setCookies('detail', cookies)
    navigate(`/payment/${id}`)
  }

  const renderDataList = (
    <ul className='detail-list'>
      {map(dataList, (data, index) => (
        <li key={index}>{data}</li>
      ))}
    </ul>
  )

  return (
    <div key={selectedCar.id}>
      <div className='d-flex flex-column align-items-start justify-content-center px-5 hero-car-div'>
        <Button
          icon={<FontAwesomeIcon icon={faArrowLeft} />}
          variant='success'
          onClick={() => navigate('/cars')}
          text='Kembali'
        />
      </div>
      <Row className='flex-column-reverse flex-lg-row align-items-center align-items-md-stretch justify-content-center mx-5 gap-3 gap-md-0 detail-section'>
        <Col
          sm='12'
          lg='6'
        >
          <Card
            title='Tentang Paket'
            info='Include'
            className='w-100 h-100 shadow'
          >
            {renderDataList}
            <Accordion
              header='Refund, Reschedule, Overtime'
              index={selectedCar.id}
            >
              {renderDataList}
            </Accordion>
          </Card>
        </Col>
        <Col
          sm='12'
          lg='6'
        >
          <Card
            data={selectedCar}
            info='Tentukan lama sewa mobil (max. 7 hari)'
            infoClass='card-info'
            className='w-100 h-100 shadow'
            isHaveImage='true'
            isHaveCategory='true'
          >
            <DateRangePicker
              onChange={setTanggal}
              value={tanggal}
              format='dd-MM-y'
              minDate={dateNow}
              maxDate={endDate(dateNow, 6)}
              rangeDivider={' to '}
            />
            <strong className='d-flex justify-content-between mt-5'>
              <p>Total</p>
              {localePriceFormat(selectedCar.price)}
            </strong>
            <div className='d-grid mt-auto'>
              <Button
                variant='success'
                disabled={!tanggal}
                onClick={() => handleViewDetail(`${id}`)}
                text='Lanjutkan Pembayaran'
              />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default DetailsPage
