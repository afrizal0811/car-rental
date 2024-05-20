import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const BsTooltip = (props) => {
  const { id, title, children } = props

  return (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      {children}
    </OverlayTrigger>
  )
}

export default BsTooltip
