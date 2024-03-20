import React from 'react'
import { FormattedNumber, IntlProvider } from 'react-intl'

const CurrencyComp = (props) => {
  return (
    <IntlProvider locale='id'>
      <FormattedNumber
        value={props.value}
        style='currency'
        currency='IDR'
      />
    </IntlProvider>
  )
}

export default CurrencyComp
