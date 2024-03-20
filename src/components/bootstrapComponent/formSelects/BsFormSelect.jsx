import React from 'react'
import { Form } from 'react-bootstrap'

const BsFormSelect = (props) => {
  const { title, option } = props
  const blankOption = (
    <option
      key='blankChoice'
      hidden
    >
      {title}
    </option>
  )
  return (
    <Form.Select>
      {blankOption}
      {option.map((data, index) => (
        <option
          value={data}
          key={index}
        >
          {data}
        </option>
      ))}
    </Form.Select>
  )
}

export default BsFormSelect
