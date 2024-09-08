import { faArrowLeft, faCheck, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import Status from '../../components/Status'
import {
  Button,
  Card,
  Modal,
  Tooltip,
} from '../../components/bootstrapComponent'
import DropzoneComp from '../../components/dropzoneComp/DropzoneComp'
import {
  deleteAllCookies,
  getCookies,
  setCookies,
} from '../../utilities/handleCookies'
import InstructionItem from './InstructionItem'
import './Styled.css'
import { cookiesData, tommorowDate } from './help'

const InstructionPage = () => {
  const { isLoggin, navigate } = useOutletContext()
  const { id } = useParams()
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const [isCopied, seIsCopied] = useState({
    'Nomor Rekening': false,
    Harga: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const data = cookiesData()

  useEffect(() => {
    if (!isLoggin) {
      navigate('/login', { replace: true })
    }
  }, [])

  if (!isLoggin) {
    navigate('/login', { replace: true })
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
      <p className='fs-6 mt-3 ms-1 mb-1'>{type}</p>
      <div className='copy'>
        <p style={{ margin: '0', padding: '0' }}>{text}</p>
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
    <div className='load-wrapper'>
      <div className='load'></div>
    </div>
  )

  const uploadInfo =
    'Terima kasih telah melakukan konfirmasi pembayaran. Upload bukti bayarmu untuk mempermudah proses penyewaan.'

  const renderUploadButton = (
    <Card
      title={
        !isUploaded ? 'Konfirmasi Pembayaran' : 'File berhasil di-upload !'
      }
      info={!isUploaded && uploadInfo}
      className='ins-item upload'
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
  )

  const renderConfirmButton = (
    <Card
      className='ins-item upload'
      info=' Klik konfirmasi pembayaran untuk mempercepat proses pengecekan'
    >
      <div className='d-grid mt-auto'>
        <Button
          variant='success'
          onClick={() => setIsConfirmed(true)}
          text='Konfirmasi Pembayaran'
        />
      </div>
    </Card>
  )

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
      <div className='hero-dv'>
        <div className='tf-back'>
          <button
            onClick={() => setShowModal(true)}
            style={{ cursor: 'pointer' }}
            id='backBtn'
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              size='2x'
            />
          </button>
          <div>
            <strong className='ps-4 fs-5'>{data.bankName} Transfer</strong>
            <p className='ps-4 fs-7'>Order ID: {data.orderId}</p>
          </div>
        </div>
        <div className=' pb-4'>
          <Status current={['current', 'current', 'num']} />
        </div>
      </div>
      <div className='ins-container'>
        <div>
          <Card
            className='ins-item'
            titleClass='fw-bold fs-6'
            title='Selesaikan Pembayaran Sebelum'
            info={tommorowDate()}
          />
          <Card
            className='ins-item'
            titleClass='fw-bold fs-6 ms-1'
            title='Lakukan Transfer Ke'
          >
            <div className='btn-bank'>
              <div className='tmbl'>{data.bankName}</div>
              <div className='d-flex flex-column'>
                <div>{data.bankName}</div>
                <div>a.n Binar Car Rental</div>
              </div>
            </div>
            {renderCopyText(
              '54104257877',
              'Nomor Rekening',
              isCopied['Nomor Rekening']
            )}
            {renderCopyText(data.price, 'Harga', isCopied['Harga'])}
          </Card>
          <Card
            className='ins-item'
            titleClass='fw-bold fs-6 ms-1 mb-3'
            title='Instruksi Pembayaran'
          >
            <InstructionItem bank={data.bankName} />
          </Card>
        </div>
        {isConfirmed ? renderUploadButton : renderConfirmButton}
      </div>
    </div>
  )
}

export default InstructionPage
