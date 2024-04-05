import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Status from '../../components/Status'
import {
  Button,
  Card,
  FormGroup,
  Modal,
} from '../../components/bootstrapComponent'

import {
  findCookiesItem,
  getCookies,
  setCookies,
} from '../../utilities/handleCookies'
import { localePriceFormat } from '../../utilities/handleLocale'
import './index.css'

const PaymentCar = (props) => {
  const [isBcaCheck, setIsBcaCheck] = useState(false)
  const [isBniCheck, setIsBniCheck] = useState(false)
  const [isMandiriCheck, setIsMandiriCheck] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [bankName, setBankName] = useState('')
  const { id } = useParams()

  const cookiesData = getCookies()
  const tanggalAwal = findCookiesItem(cookiesData, 'tanggalAwal')
  const tanggalAkhir = findCookiesItem(cookiesData, 'tanggalAkhir')
  const lamaHari = findCookiesItem(cookiesData, 'lamaHari')
  const car = findCookiesItem(cookiesData, 'car')

  const handleClickBank = (e, param) => {
    e.preventDefault()
    if (param === 'BCA') {
      setIsBcaCheck(!isBcaCheck)
      setBankName(param)
      if (isBcaCheck) {
        setBankName('')
      }
      if (isBniCheck === true) {
        setIsBniCheck(!isBniCheck)
      } else if (isMandiriCheck === true) {
        setIsMandiriCheck(!isMandiriCheck)
      }
    } else if (param === 'BNI') {
      setIsBniCheck(!isBniCheck)
      setBankName(param)
      if (isBniCheck) {
        setBankName('')
      }
      if (isBcaCheck === true) {
        setIsBcaCheck(!isBcaCheck)
      } else if (isMandiriCheck === true) {
        setIsMandiriCheck(!isMandiriCheck)
      }
    } else if (param === 'Mandiri') {
      setIsMandiriCheck(!isMandiriCheck)
      setBankName(param)
      if (isMandiriCheck) {
        setBankName('')
      }
      if (isBcaCheck === true) {
        setIsBcaCheck(!isBcaCheck)
      } else if (isBniCheck === true) {
        setIsBniCheck(!isBniCheck)
      }
    }
  }

  const handleNext = () => {
    const idNumber = Math.floor(Math.random() * 100001) + 100000
    const bank = { name: 'bankName', value: bankName }
    const orderId = { name: 'orderId', value: idNumber }
    const price = { name: 'price', value: car.price * lamaHari }
    cookiesData.push(bank, orderId, price)
    setCookies(cookiesData)
    props.navigate(`/instruction/1`)
  }

  const renderBankButton = (name, state) => (
    <a
      className='btn-bank'
      onClick={(e) => handleClickBank(e, name)}
    >
      <div className='tmbl'>{name}</div>
      <div className='tmbl-text'>{name} Transfer</div>
      {state && (
        <FontAwesomeIcon
          icon={faCheck}
          className='ico'
        />
      )}
    </a>
  )

  const renderCost = (isTotal) => {
    const price = isTotal ? car.price * lamaHari : car.price
    return localePriceFormat(price)
  }

  return (
    <div key={car.id}>
      <Modal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleNext={handleNext}
      />
      <div className='hero-pay-div'>
        <div className='pay-back'>
          <button
            onClick={() => props.navigate(`/cars/${id}`)}
            style={{ cursor: 'pointer' }}
            id='backBtn'
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              size='2x'
            />
          </button>
          <strong className='ps-4 fs-5'>Pembayaran</strong>
        </div>
        <div className='d-flex'>
          <Status current={['current', 'num', 'num']} />
        </div>
      </div>
      <div>
        <Form className='form-pesan'>
          <h1 className='fw-bold fs-6 mb-3'>Detail Pesananmu</h1>
          <div className='title-pesan'>
            <FormGroup
              controlId='namaMobil'
              className='isi-pesan'
              label='Nama Mobil'
            >
              <p className='text-capitalize text-black-50'>{car.name}</p>
            </FormGroup>
            <FormGroup
              controlId='kategoriMobil'
              className='isi-pesan'
              label='Kategori'
            >
              <p className='text-capitalize text-black-50'>{car.category}</p>
            </FormGroup>
            <FormGroup
              controlId='mulaiSewa'
              className='isi-pesan'
              label='Tanggal Mulai Sewa'
            >
              <p className='text-capitalize text-black-50'>{tanggalAwal}</p>
            </FormGroup>
            <FormGroup
              controlId='akhirSewa'
              className='isi-pesan'
              label='Tanggal Akhir Sewa'
            >
              <p className='text-capitalize text-black-50'>{tanggalAkhir}</p>
            </FormGroup>
          </div>
        </Form>
        <div className='select-bank'>
          <Card
            className='card-bank-detail'
            title='Pilih Bank Transfer'
            info='Kamu bisa membayar dengan transfer melalui ATM, Internet Banking, atau Mobile Banking'
            titleClass='fw-bold mb-4'
          >
            {renderBankButton('BCA', isBcaCheck)}
            {renderBankButton('BNI', isBniCheck)}
            {renderBankButton('Mandiri', isMandiriCheck)}
          </Card>
          <Card
            info={car.category}
            className='card-total-pay'
            title={car.name}
            infoClass='date-picker'
          >
            <div className='py-1'>
              <strong>Harga</strong>
              <ul className='total-pay'>
                <li>
                  Sewa Mobil {renderCost(false)} x {lamaHari} hari
                </li>
                {renderCost(true)}
              </ul>
            </div>
            <div className='py-1'>
              <strong>Biaya Lainnya</strong>
              <ul className='total-pay'>
                <div>
                  <li>Pajak</li>
                  <li>Biaya makan sopir</li>
                </div>
                <div>
                  <p style={{ margin: 0, color: '#5CB85F' }}>Termasuk</p>
                  <p style={{ margin: 0, color: '#5CB85F' }}>Termasuk</p>
                </div>
              </ul>
            </div>
            <div className='py-1'>
              <strong>Belum Termasuk</strong>
              <ul className='total-pay'>
                <li>Bensin</li>
                <li>Tol dan parkir</li>
              </ul>
            </div>
            <hr />
            <div className='all-total'>
              <strong>Total</strong>
              <strong>{renderCost(true)}</strong>
            </div>
            <div className='d-grid mt-auto'>
              <Button
                variant='success'
                disabled={!bankName}
                onClick={() => setShowModal(true)}
                text='Bayar'
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PaymentCar
