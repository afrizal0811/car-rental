import { isNull } from 'lodash'
import { findCookiesItem, getCookies } from '../../utilities/handleCookies'
import {
  localeDateShortMonth,
  localeDateWeekday,
  localeTime,
} from '../../utilities/handleLocale'
export const tommorowDate = () => {
  let nextDate = new Date()
  nextDate.setDate(new Date().getDate() + 1)

  const tgl = localeDateShortMonth(nextDate)
  const hari = localeDateWeekday(nextDate)
  const jam = localeTime(nextDate)
  const tomorrow = hari + ', ' + tgl + ' jam ' + jam
  return tomorrow
}

export const cookiesData = () => {
  const cookiesData = getCookies(1)
  if (!isNull(cookiesData)) {
    const bankName = findCookiesItem(cookiesData, 'bankName')
    const orderId = findCookiesItem(cookiesData, 'orderId')
    const price = findCookiesItem(cookiesData, 'price')
    return { bankName, orderId, price }
  }
  return {}
}
