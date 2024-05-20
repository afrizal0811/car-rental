import React from 'react'
import Modal from 'react-bootstrap/Modal'
import BsButton from '../button/BsButton'

const BsModal = (props) => {
  const { show, handleClose, handleNext, title, textRefuse, textAccept } = props
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
    >
      <Modal.Body>{title}</Modal.Body>
      <Modal.Footer>
        <BsButton
          variant='secondary'
          onClick={handleClose}
          text={textRefuse}
        />
        <BsButton
          variant='primary'
          onClick={handleNext}
          text={textAccept}
        />
      </Modal.Footer>
    </Modal>
  )
}

export default BsModal
