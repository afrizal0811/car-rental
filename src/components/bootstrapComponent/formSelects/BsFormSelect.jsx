import React from 'react'
import { Form } from 'react-bootstrap'

const BsFormSelect = (props) => {
  const { title, option, name } = props
  const blankOption = (
    <option
      disabled
      hidden
      key='blankChoice'
      selected
    >
      {title}
    </option>
  )
  return (
    <Form.Select name={name}>
      {blankOption}
      {option.map((data, index) => (
        <option
          value={data.value}
          key={index}
        >
          {data.text}
        </option>
      ))}
    </Form.Select>
  )
}

export default BsFormSelect
