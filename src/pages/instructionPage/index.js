import { faArrowLeft, faCheck, faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Status from '../../components/Status'
import BsButton from '../../components/bootstrapComponent/button/BsButton'
import BsCard from '../../components/bootstrapComponent/card/BsCard'
import DropzoneComp from '../../components/dropzoneComp/DropzoneComp'
import { findCookiesItem, getCookies } from '../../utilities/handleCookies'
import {
  localeDateShortMonth,
  localeDateWeekday,
  localeTime,
} from '../../utilities/handleLocale'
import Instuction from './Instuction'
import './index.css'

const PayInstruction = (props) => {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [isUploaded, setIsUploaded] = useState(false)
  const [isCopied, seIsCopied] = useState({ rekening: false, harga: false })
  const [isLoading, setIsLoading] = useState(false)

  const { id } = useParams()
  const cookiesData = getCookies()
  const bankName = findCookiesItem(cookiesData, 'bankName')
  const orderId = findCookiesItem(cookiesData, 'orderId')
  const price = findCookiesItem(cookiesData, 'price')

  let nextDate = new Date()
  nextDate.setDate(new Date().getDate() + 1)

  const tgl = localeDateShortMonth(nextDate)
  const hari = localeDateWeekday(nextDate)
  const jam = localeTime(nextDate)
  const tomorrow = hari + ', ' + tgl + ' jam ' + jam

  const copyText = (text, type) => {
    navigator.clipboard.writeText(text)
    seIsCopied((prev) => ({ ...prev, [type]: true }))
    setTimeout(() => {
      seIsCopied((prev) => ({ ...prev, [type]: false }))
    }, 500)
  }

  const renderCopyText = (text, type, isCopy) => (
    <div>
      <p className='fs-6 mt-3 ms-1 mb-1'>Nomor Rekening</p>
      <div className='copy'>
        <p style={{ margin: '0', padding: '0' }}>{text}</p>
        <a onClick={() => copyText(text, type)}>
          <FontAwesomeIcon icon={isCopy ? faCheck : faCopy} />
        </a>
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
    <BsCard
      title={
        !isUploaded ? 'Konfirmasi Pembayaran' : 'File berhasil di-upload !'
      }
      info={!isUploaded && uploadInfo}
      className='ins-item upload'
    >
      {isLoading ? renderLoading : !isUploaded && renderDropzone}
      <div className='d-grid mt-auto'>
        <BsButton
          variant='success'
          disabled={!isUploaded}
          onClick={() => props.navigate(`/ticket/${id}`)}
          text='Next'
        />
      </div>
    </BsCard>
  )

  const renderConfirmButton = (
    <BsCard
      className='ins-item upload'
      info=' Klik konfirmasi pembayaran untuk mempercepat proses pengecekan'
    >
      <div className='d-grid mt-auto'>
        <BsButton
          variant='success'
          onClick={() => setIsConfirmed(true)}
          text='Konfirmasi Pembayaran'
        />
      </div>
    </BsCard>
  )

  return (
    <div>
      <div className='hero-dv'>
        <div className='tf-back'>
          <button
            // onClick={handleBack}
            style={{ cursor: 'pointer' }}
            id='backBtn'
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              size='2x'
            />
          </button>
          <div>
            <strong className='ps-4 fs-5'>{bankName} Transfer</strong>
            <p className='ps-4 fs-7'>Order ID: {orderId}</p>
          </div>
        </div>
        <div className=' pb-4'>
          <Status current={['current', 'current', 'num']} />
        </div>
      </div>
      <div className='ins-container'>
        <div>
          <BsCard
            className='ins-item'
            titleClass='fw-bold fs-6'
            title='Selesaikan Pembayaran Sebelum'
            info={tomorrow}
          />
          <BsCard
            className='ins-item'
            titleClass='fw-bold fs-6 ms-1'
            title='Lakukan Transfer Ke'
          >
            <div className='btn-bank'>
              <div className='tmbl'>{bankName}</div>
              <div className='d-flex flex-column'>
                <div>{bankName}</div>
                <div>a.n Binar Car Rental</div>
              </div>
            </div>
            {renderCopyText('54104257877', 'rekening', isCopied.rekening)}
            {renderCopyText(price, 'harga', isCopied.harga)}
          </BsCard>
          <BsCard
            className='ins-item'
            titleClass='fw-bold fs-6 ms-1 mb-3'
            title='Instruksi Pembayaran'
          >
            <Instuction bank={bankName} />
          </BsCard>
        </div>
        {isConfirmed ? renderUploadButton : renderConfirmButton}
      </div>
    </div>
  )
}

export default PayInstruction
