import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import React from 'react'
import Status from '../../components/Status'
import BsButton from '../../components/bootstrapComponent/button/BsButton'
import BsCard from '../../components/bootstrapComponent/card/BsCard'
import PdfComp from './PdfComp'
import './index.css'

const Ticket = () => {
  const pdfDocument = <PdfComp />
  const renderDownload = (
    <PDFDownloadLink
      document={pdfDocument}
      fileName='Invoice.pdf'
    >
      <BsButton
        text='Unduh'
        id='downloadBtn'
      />
    </PDFDownloadLink>
  )

  return (
    <div>
      <div className='hero-d'>
        <div className='tf-back'>
          <div>
            <strong className='ps-4 fs-5'>Ticket</strong>
            <p className='ps-4 fs-7'>Order ID: 111</p>
          </div>
        </div>
        <div className=' pb-4'>
          <Status current={['current', 'current', 'current']} />
        </div>
      </div>

      <div className='success'>
        <FontAwesomeIcon
          icon={faCircleCheck}
          size='5x'
          className='ceklis'
        />
        <div className='text-center'>
          <strong>Pembayaran Berhasil!</strong>
          <p className='text-muted mt-3'>
            Tunjukkan invoice ini ke petugas BCR di titik temu.
          </p>
        </div>
      </div>
      <BsCard
        title={renderDownload}
        className='ticket-card'
        titleClass='fw-bold fs-6'
      >
        <PDFViewer style={{ height: '100%' }}>{pdfDocument}</PDFViewer>
      </BsCard>
    </div>
  )
}

export default Ticket
