import { isNull } from 'lodash'
import { findCookiesItem, getCookies } from '../../utilities/handleCookies'

export const cookiesData = () => {
  const cookiesData = getCookies(0)
  if (!isNull(cookiesData)) {
    const tanggalAwal = findCookiesItem(cookiesData, 'tanggalAwal')
    const tanggalAkhir = findCookiesItem(cookiesData, 'tanggalAkhir')
    const lamaHari = findCookiesItem(cookiesData, 'lamaHari')
    const car = findCookiesItem(cookiesData, 'car')
    return { tanggalAwal, tanggalAkhir, lamaHari, car }
  }
  return {}
}
