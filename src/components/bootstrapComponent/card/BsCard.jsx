import React from 'react'
import { Card } from 'react-bootstrap'
import imagePath from '../../../constants/imagePath'

const BsCard = (props) => {
  const { data, title, info, isHaveImage, children, className, infoClass } = props
  const isDataObject = typeof data === 'object'
  const dataKey = isDataObject ? data.id : '0'
  const dataName = isDataObject && !title ? data.name : title
  const dataInfo = isDataObject && !info ? data.info : info
  const dataImage = isDataObject ? data.image : ''

  const renderImage = (
    <Card.Img
      variant='top'
      src={dataImage ? `../${dataImage}` : imagePath.noCar}
    />
  )

  return (
    <Card
      key={dataKey}
      className={className}
    >
      {isHaveImage && renderImage}
      <Card.Body className='d-flex flex-column'>
        <Card.Title>{dataName}</Card.Title>
        <Card.Text className={infoClass}>{dataInfo}</Card.Text>
        {children}
      </Card.Body>
    </Card>
  )
}

export default BsCard
