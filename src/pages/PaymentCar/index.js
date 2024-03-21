import {
  faArrowLeft,
  faCheck,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import BsButton from '../../components/bootstrapComponent/button/BsButton'
import BsCard from '../../components/bootstrapComponent/card/BsCard'
import BsFormGroup from '../../components/bootstrapComponent/formGroup/BsFormGroup'
import BsModal from '../../components/bootstrapComponent/modal/BsModal'
import CurrencyComp from '../../components/currencyComp/CurrencyComp'
import Status from '../../components/Status'
import { getCookies } from '../../utilities/handleCookies'
import './index.css'

const PaymentCar = () => {
  const [isBcaCheck, setIsBcaCheck] = useState(false)
  const [isBniCheck, setIsBniCheck] = useState(false)
  const [isMandiriCheck, setIsMandiriCheck] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [bankName, setBankName] = useState('')
  let navigate = useNavigate()
  const { id } = useParams()

  const findItem = (data, text) => {
    return data.find((data) => data.name === text).value
  }

  const cookiesData = getCookies()
  const tanggalAwal = findItem(cookiesData, 'tanggalAwal')
  const tanggalAkhir = findItem(cookiesData, 'tanggalAkhir')
  const lamaHari = findItem(cookiesData, 'lamaHari')
  const car = findItem(cookiesData, 'car')

  const handleClickBank = (e, param) => {
    e.preventDefault()
    if (param === 'BCA') {
      setIsBcaCheck(!isBcaCheck)
      setBankName('BCA Transfer')
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
      setBankName('BNI Transfer')
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
      setBankName('Mandiri Transfer')
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
    const value = isTotal ? car.price * lamaHari : car.price
    return <CurrencyComp value={value} />
  }

  const handleNext = () => navigate(`/payments/1`)

  return (
    <div key={car.id}>
      <BsModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleNext={handleNext}
      />
      <div className='hero-pay-div'>
        <div className='pay-back'>
          <button
            onClick={() => navigate(`/cars/${id}`)}
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
            <BsFormGroup
              controlId='namaMobil'
              className='isi-pesan'
              label='Nama Mobil'
            >
              <p className='text-capitalize text-black-50'>{car.name}</p>
            </BsFormGroup>
            <BsFormGroup
              controlId='kategoriMobil'
              className='isi-pesan'
              label='Kategori'
            >
              <p className='text-capitalize text-black-50'>{car.name}</p>
            </BsFormGroup>
            <BsFormGroup
              controlId='mulaiSewa'
              className='isi-pesan'
              label='Tanggal Mulai Sewa'
            >
              <p className='text-capitalize text-black-50'>{tanggalAwal}</p>
            </BsFormGroup>
            <BsFormGroup
              controlId='akhirSewa'
              className='isi-pesan'
              label='Tanggal Akhir Sewa'
            >
              <p className='text-capitalize text-black-50'>{tanggalAkhir}</p>
            </BsFormGroup>
          </div>
        </Form>
        <div className='select-bank'>
          <BsCard
            className='card-bank-detail'
            title='Pilih Bank Transfer'
            info='Kamu bisa membayar dengan transfer melalui ATM, Internet Banking, atau Mobile Banking'
            titleClass='fw-bold mb-4'
          >
            {renderBankButton('BCA', isBcaCheck)}
            {renderBankButton('BNI', isBniCheck)}
            {renderBankButton('Mandiri', isMandiriCheck)}
          </BsCard>
          <BsCard
            className='card-total-pay'
            title={car.name}
            infoClass='detail-title'
          >
            <div className='d-flex category'>
              <FontAwesomeIcon
                icon={faUserGroup}
                className='category-icon'
              />
              <p>1</p>
            </div>
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
              <BsButton
                variant='success'
                disabled={!bankName}
                onClick={() => setShowModal(true)}
                text='Bayar'
              />
            </div>
          </BsCard>
        </div>
      </div>
    </div>
  )
}

export default PaymentCar
