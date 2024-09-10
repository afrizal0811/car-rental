import { faArrowLeft, faCheck, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom'
import {
  Button,
  Card,
  Modal,
  Tooltip,
} from '../../components/bootstrapComponent'
import DropzoneComp from '../../components/dropzoneComp/DropzoneComp'
import StatusBar from '../../components/status_bar/StatusBar'
import {
  deleteAllCookies,
  getCookies,
  setCookies,
} from '../../utilities/handleCookies'
import InstructionItem from './InstructionItem'
import './Styled.css'
import { cookiesData, tommorowDate } from './help'

const InstructionPage = () => {
  const { isLoggin, navigate, params } = useOutletContext()
  const { id } = params
  const [isUploaded, setIsUploaded] = useState(false)
  const [isCopied, seIsCopied] = useState({
    'Nomor Rekening': false,
    Harga: false,
    'Order Id': false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const data = cookiesData()

  useEffect(() => {
    if (!isLoggin) {
      navigate('/auth/login', { replace: true })
    }
  }, [])

  if (!isLoggin) {
    navigate('/auth/login', { replace: true })
    return null
  }

  const handleOnClick = () => {
    let cookies = []
    for (let i = 0; i < 2; i++) {
      cookies = cookies.concat(getCookies(i))
    }
    deleteAllCookies()
    setCookies('cookies', cookies)
    navigate(`/ticket/${id}`)
  }

  const copyText = (text, type) => {
    navigator.clipboard.writeText(text)
    seIsCopied((prev) => ({ ...prev, [type]: true }))
    setTimeout(() => {
      seIsCopied((prev) => ({ ...prev, [type]: false }))
    }, 500)
  }

  const renderCopyText = (text, type, isCopy) => (
    <div>
      <p className='fs-6 mt-3 mb-1'>{type}</p>
      <div className='d-flex align-items-center justify-content-between p-2 border border-dark'>
        <p className='m-0 p-0'>{text}</p>
        <Tooltip
          id={text}
          title='copy'
        >
          <a onClick={() => copyText(text, type)}>
            <FontAwesomeIcon icon={isCopy ? faCheck : faCopy} />
          </a>
        </Tooltip>
      </div>
    </div>
  )

  const renderDropzone = (
    <DropzoneComp
      setIsLoading={setIsLoading}
      handleUploaded={() => setIsUploaded(true)}
    />
  )

  const renderLoading = (
    <div className='d-flex align-items-center justify-content-center border mb-3'>
      <div
        className='spinner-grow m-5'
        role='status'
      >
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )

  const uploadInfo =
    'Terima kasih telah melakukan konfirmasi pembayaran. Upload bukti bayarmu untuk mempermudah proses penyewaan.'

  return (
    <div>
      <Modal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleNext={() => navigate(`/payment/${id}`)}
        title='Apakah kamu yakin ingin kembali?'
        textRefuse='Tidak'
        textAccept='Ya'
      />
      <div className='d-flex flex-column flex-md-row align items-start align-items-md-center justify-content-center justify-content-md-between px-5 gap-4 gap-md-0 w-100 hero-inst-div'>
        <div>
          <Button
            icon={<FontAwesomeIcon icon={faArrowLeft} />}
            variant='success'
            onClick={() => setShowModal(true)}
            text='Kembali'
          />
        </div>
        <div className='d-flex'>
          <StatusBar location={['current', 'current', 'num']} />
        </div>
      </div>
      <div className='d-flex flex-column flex-md-row gap-3 px-0 mx-0 px-md-3 mx-md-3'>
        <Row className='d-flex flex-column flex-md-row justify-content-between align-items-center gap-3  w-100 inst-container'>
          <Col
            sm='12'
            md='12'
          >
            <Card
              className='mx-5 mx-md-3 shadow'
              titleClass='fw-bold fs-5'
              title='Selesaikan Pembayaran Sebelum'
              info={tommorowDate()}
            />
          </Col>
          <Col md='12'>
            <Card
              className='mx-5 mx-md-3 shadow'
              titleClass='fw-bold fs-5'
              title='Lakukan Transfer Ke'
            >
              <div className='d-flex w-100 align-items-center text-decoration-none text-dark my-2 gap-3'>
                <div className='d-flex align-items-center justify-content-center py-2 w-25 rounded border'>
                  {data.bankName}
                </div>
                <div className='d-flex flex-column'>
                  <div>{data.bankName}</div>
                  <div>a.n Binar Car Rental</div>
                </div>
              </div>
              {renderCopyText(data.orderId, 'Order Id', isCopied['Order Id'])}
              {renderCopyText(
                '54104257877',
                'Nomor Rekening',
                isCopied['Nomor Rekening']
              )}
              {renderCopyText(data.price, 'Harga', isCopied['Harga'])}
            </Card>
          </Col>
          <Col md='12'>
            <Card
              className='mx-5 mx-md-3  shadow'
              titleClass='fw-bold fs-5'
              title='Instruksi Pembayaran'
            >
              <InstructionItem />
            </Card>
          </Col>
        </Row>
        <Row className='d-flex flex-column flex-md-row gap-3  w-100 inst-container'>
          <Col md='12'>
            <Card
              title={
                !isUploaded
                  ? 'Konfirmasi Pembayaran'
                  : 'File berhasil di-upload !'
              }
              info={!isUploaded && uploadInfo}
              className='mx-5 mx-md-3  shadow'
              titleClass='fw-bold fs-5'
            >
              {isLoading ? renderLoading : !isUploaded && renderDropzone}
              <div className='d-grid mt-auto'>
                <Button
                  variant='success'
                  disabled={!isUploaded}
                  onClick={handleOnClick}
                  text='Next'
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default InstructionPage
