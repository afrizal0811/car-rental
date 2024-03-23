import React from 'react'
import { Card } from 'react-bootstrap'
import imagePath from '../../../constants/imagePath'

const BsCard = (props) => {
  const {
    data,
    title,
    info,
    children,
    className,
    titleClass,
    infoClass,
    isHaveImage,
    isHaveCategory,
  } = props

  const isDataObject = typeof data === 'object'
  const dataKey = isDataObject ? data.id : '0'
  const dataName = isDataObject && !title ? data.name : title
  const dataInfo = isDataObject && !info ? data.info : info
  const dataCategory = isDataObject ? data.category : ''
  const dataImage = isDataObject ? data.image : ''

  const renderImage = (
    <Card.Img
      variant='top'
      src={dataImage ? `../${dataImage}` : imagePath.noCar}
    />
  )

  const renderCategory = (
    <Card.Text className={infoClass}>{dataCategory}</Card.Text>
  )

  return (
    <Card
      key={dataKey}
      className={className}
    >
      {isHaveImage && renderImage}
      <Card.Body className='d-flex flex-column'>
        <Card.Title className={titleClass}>{dataName}</Card.Title>
        {isHaveCategory && renderCategory}
        <Card.Text className={infoClass}>{dataInfo}</Card.Text>
        {children}
      </Card.Body>
    </Card>
  )
}

export default BsCard
