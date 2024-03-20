import React from 'react'
import { Card } from 'react-bootstrap'
import imagePath from '../../../constants/imagePath'

const BsCardImage = (props) => {
  const { result, children } = props
  return (
    <Card
      key={result.id}
      style={{ width: '18rem', margin: '1rem' }}
      className='card-cont'
    >
      <Card.Img
        variant='top'
        src={result.image ? result.image : imagePath.noCar}
      />
      <Card.Body className='d-flex flex-column'>
        <Card.Title>{result.name}</Card.Title>
        {children}
      </Card.Body>
    </Card>
  )
}

export default BsCardImage
