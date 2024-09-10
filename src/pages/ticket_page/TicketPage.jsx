import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import { isEmpty } from 'lodash'
import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import Status from '../../components/Status'
import { Button, Card } from '../../components/bootstrapComponent'
import PdfComp from './PdfComp'
import './Styled.css'
import { cookiesData } from './help'

const TicketPage = () => {
  const { isLoggin, navigate } = useOutletContext()
  const data = cookiesData()
  const isDataEmpty = isEmpty(data)

  useEffect(() => {
    if (!isLoggin) {
      navigate('/auth/login')
    } else if (isDataEmpty) {
      navigate('/')
    }
  }, [])

  if (!isLoggin) {
    navigate('/auth/login')
    return null
  } else if (isDataEmpty) {
    navigate('/')
  }

  const renderDownload = (
    <PDFDownloadLink
      document={<PdfComp data={data} />}
      fileName={`Invoice-${data.orderId}.pdf`}
    >
      <Button
        text='Unduh'
        className='ticket-btn'
      />
    </PDFDownloadLink>
  )

  return (
    <div>
      <div className='d-flex flex-column justify-content-center align-items-center m-4'>
        <FontAwesomeIcon
          icon={faCircleCheck}
          size='5x'
          className='pb-3 text-success'
        />
        <div className='text-center'>
          <strong>Pembayaran Berhasil!</strong>
          <p className='text-muted mt-3'>
            Tunjukkan invoice ini ke petugas BCR di titik temu.
          </p>
          <Button
            text='Kembali'
            className='ticket-btn'
            onClick={() => navigate('/')}
          />
        </div>
      </div>
      <Card
        title={renderDownload}
        className='ticket-card'
        titleClass='fw-bold fs-6'
      >
        <PDFViewer className='w-100 h-100'>
          <PdfComp data={data} />
        </PDFViewer>
      </Card>
    </div>
  )
}

export default TicketPage
