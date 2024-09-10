import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isEmpty, map } from 'lodash'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom'
import {
  Button,
  Card,
  FormGroup,
  Modal,
} from '../../components/bootstrapComponent'
import StatusBar from '../../components/status_bar/StatusBar'
import { setCookies } from '../../utilities/handleCookies'
import { localePriceFormat } from '../../utilities/handleLocale'
import './Styled.css'
import { cookiesData } from './help'

const PaymentPage = () => {
  const { isLoggin, navigate, params } = useOutletContext()
  const { id } = params
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
      navigate('/auth/login')
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
    navigate(`/instruction/${id}`)
  }

  const renderBankButton = (name) => (
    <a
      className='d-flex w-100 align-items-center text-decoration-none text-dark my-2 gap-3 btn-hover'
      onClick={(e) => handleClickBank(e, name)}
    >
      <div
        className={`d-flex align-items-center justify-content-center py-2 w-25 rounded border ${
          isBankCheck[name] ? 'text-success border-success' : 'text-dark'
        }`}
      >
        {name}
      </div>
      <div className='tmbl-text'>{name} Transfer</div>
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
      <div className='d-flex flex-column flex-md-row align items-start align-items-md-center justify-content-center justify-content-md-between px-5 gap-4 gap-md-0 w-100 hero-pay-div'>
        <div>
          <Button
            icon={<FontAwesomeIcon icon={faArrowLeft} />}
            variant='success'
            onClick={() => navigate('/cars/' + id)}
            text='Kembali'
          />
        </div>
        <div className='d-flex'>
          <StatusBar location={['current', 'num', 'num']} />
        </div>
      </div>
      <div>
        <Row className='mx-5 p-4 shadow rounded bg-white d-flex flex-column form-pesan'>
          <Col>
            <h1 className='fw-bold fs-6 mb-3'>Detail Pesananmu</h1>
          </Col>
          <Col>
            <div className='d-flex flex-column flex-md-row justify-content-between'>
              <FormGroup
                controlId='namaMobil'
                className='d-flex flex-row flex-md-column justify-content-between gap-3 pt-1'
                label='Nama Mobil'
              >
                <p className='text-capitalize text-black-50'>{data.car.name}</p>
              </FormGroup>
              <FormGroup
                controlId='kategoriMobil'
                className='d-flex flex-row flex-md-column justify-content-between gap-3 pt-1'
                label='Kategori'
              >
                <p className='text-capitalize text-black-50'>
                  {data.car.category}
                </p>
              </FormGroup>
              <FormGroup
                controlId='mulaiSewa'
                className='d-flex flex-row flex-md-column justify-content-between gap-3 pt-1'
                label='Tanggal Mulai Sewa'
              >
                <p className='text-capitalize text-black-50'>
                  {data.tanggalAwal}
                </p>
              </FormGroup>
              <FormGroup
                controlId='akhirSewa'
                className='d-flex flex-row flex-md-column justify-content-between gap-3 pt-1'
                label='Tanggal Akhir Sewa'
              >
                <p className='text-capitalize text-black-50'>
                  {data.tanggalAkhir}
                </p>
              </FormGroup>
            </div>
          </Col>
        </Row>
        <Row className='d-flex flex-column flex-md-row align-items-stretch justify-content-between mx-3 mx-md-3 p-3 gap-3 gap-lg-0'>
          <Col
            sm='12'
            lg='6'
          >
            <Card
              className='w-100 h-100 d-flex gap-3 shadow'
              title='Pilih Bank Transfer'
              info='Kamu bisa membayar dengan transfer melalui ATM, Internet Banking, atau Mobile Banking'
              titleClass='fw-bold mb-4'
            >
              {renderBankButton('BCA')}
              {renderBankButton('BNI')}
              {renderBankButton('Mandiri')}
            </Card>
          </Col>
          <Col
            sm='12'
            lg='6'
          >
            <Card
              info={data.car.category}
              className='w-100 h-100 shadow'
              title={data.car.name}
              infoClass='date-picker'
            >
              <div className='py-1'>
                <strong>Harga</strong>
                <ul className='d-flex justify-content-between gap-4'>
                  <li>
                    Sewa Mobil {renderCost(false)} x {data.lamaHari} hari
                  </li>
                  {renderCost(true)}
                </ul>
              </div>
              <div className='py-1'>
                <strong>Biaya Lainnya</strong>
                <ul className='d-flex justify-content-between gap-4'>
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
                <ul>
                  <li>Bensin</li>
                  <li>Tol dan parkir</li>
                </ul>
              </div>
              <hr />
              <div className='d-flex justify-content-between mb-4'>
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
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default PaymentPage
