import { faArrowLeft, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isEmpty, map } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Status from '../../components/Status'
import {
  Button,
  Card,
  FormGroup,
  Modal,
} from '../../components/bootstrapComponent'
import { setCookies } from '../../utilities/handleCookies'
import { localePriceFormat } from '../../utilities/handleLocale'
import { cookiesData } from './help'
import './index.css'

const PaymentPage = (props) => {
  const { isLoggin, navigate } = props
  const { id } = useParams()
  const [isBankCheck, setIsBankCheck] = useState({
    BCA: false,
    BNI: false,
    Mandiri: false,
  })
  const [showModal, setShowModal] = useState(false)
  const [bankName, setBankName] = useState('')
  const data = cookiesData()
  const isDataEmpty = isEmpty(data)

  useEffect(() => {
    if (!isLoggin || isDataEmpty) {
      navigate('/login')
    }
  }, [])

  const handleClickBank = (e, param) => {
    const bank = ['BCA', 'BNI', 'Mandiri']
    const filterBank = bank.filter((data) => data !== param)
    e.preventDefault()
    setBankName(param)
    setIsBankCheck((prev) => ({ ...prev, [param]: !isBankCheck[param] }))
    map(filterBank, (data) => {
      setIsBankCheck((prev) => ({ ...prev, [data]: false }))
    })
    if (isBankCheck[param]) {
      setBankName('')
    }
  }

  const handleNext = () => {
    const idNumber = Math.floor(Math.random() * 100001) + 100000
    const bank = { name: 'bankName', value: bankName }
    const orderId = { name: 'orderId', value: idNumber }
    const price = {
      name: 'price',
      value: data.car.price * data.lamaHari,
    }
    const cookies = [bank, orderId, price]
    setCookies('payment', cookies)
    props.navigate(`/instruction/${id}`)
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
    const price = isTotal ? data.car.price * data.lamaHari : data.car.price
    return localePriceFormat(price)
  }

  return (
    <div key={data.car.id}>
      <Modal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleNext={handleNext}
        title='Periksa kembali detail pesanan'
        textRefuse='Periksa Kembali'
        textAccept='Lanjutkan Pesanan'
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
              <p className='text-capitalize text-black-50'>{data.car.name}</p>
            </FormGroup>
            <FormGroup
              controlId='kategoriMobil'
              className='isi-pesan'
              label='Kategori'
            >
              <p className='text-capitalize text-black-50'>
                {data.car.category}
              </p>
            </FormGroup>
            <FormGroup
              controlId='mulaiSewa'
              className='isi-pesan'
              label='Tanggal Mulai Sewa'
            >
              <p className='text-capitalize text-black-50'>
                {data.tanggalAwal}
              </p>
            </FormGroup>
            <FormGroup
              controlId='akhirSewa'
              className='isi-pesan'
              label='Tanggal Akhir Sewa'
            >
              <p className='text-capitalize text-black-50'>
                {data.tanggalAkhir}
              </p>
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
            {renderBankButton('BCA', isBankCheck.BCA)}
            {renderBankButton('BNI', isBankCheck.BNI)}
            {renderBankButton('Mandiri', isBankCheck.Mandiri)}
          </Card>
          <Card
            info={data.car.category}
            className='card-total-pay'
            title={data.car.name}
            infoClass='date-picker'
          >
            <div className='py-1'>
              <strong>Harga</strong>
              <ul className='total-pay'>
                <li>
                  Sewa Mobil {renderCost(false)} x {data.lamaHari} hari
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
              <ul style={{ fontSize: '12px', paddingTop: '0.5rem' }}>
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

export default PaymentPage
