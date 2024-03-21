import React from 'react'
import Modal from 'react-bootstrap/Modal'
import BsButton from '../button/BsButton'

const BsModal = (props) => {
  const { show, handleClose, handleNext } = props
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
    >
      <Modal.Body>Periksa kembali detail pesanan</Modal.Body>
      <Modal.Footer>
        <BsButton
          variant='secondary'
          onClick={handleClose}
          text='Periksa Kembali'
        />
        <BsButton
          variant='primary'
          onClick={handleNext}
          text='Lanjutkan Pesanan'
        />
      </Modal.Footer>
    </Modal>
  )
}

export default BsModal
