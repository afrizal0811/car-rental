import { faArrowLeft, faCheck, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Status from '../../components/Status'
import { Button, Card, Tooltip, Modal } from '../../components/bootstrapComponent'
import DropzoneComp from '../../components/dropzoneComp/DropzoneComp'
import Instuction from './Instuction'
import { cookiesData, tommorowDate } from './help'
import './index.css'

const PayInstruction = (props) => {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const [isCopied, seIsCopied] = useState({
    'Nomor Rekening': false,
    Harga: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const { id } = useParams()
  const data = cookiesData()

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
    'Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi. Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu'

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
          onClick={() => props.navigate(`/ticket/${id}`)}
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
        handleNext={() => props.navigate(`/payment/${id}`)}
        title='Apakah Anda yakin ingin kembali?'
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
            <Instuction bank={data.bankName} />
          </Card>
        </div>
        {isConfirmed ? renderUploadButton : renderConfirmButton}
      </div>
    </div>
  )
}

export default PayInstruction
