import { findCookiesItem, getCookies } from '../../utilities/handleCookies'

export const cookiesData = () => {
  const cookiesData = getCookies()
  const tanggalAwal = findCookiesItem(cookiesData, 'tanggalAwal')
  const tanggalAkhir = findCookiesItem(cookiesData, 'tanggalAkhir')
  const lamaHari = findCookiesItem(cookiesData, 'lamaHari')
  const car = findCookiesItem(cookiesData, 'car')
  return { tanggalAwal, tanggalAkhir, lamaHari, car }
}
