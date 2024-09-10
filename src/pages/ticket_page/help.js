import { StyleSheet } from '@react-pdf/renderer'
import color from '../../constants/color'
import { findCookiesItem, getCookies } from '../../utilities/handleCookies'
import { localePriceFormat } from '../../utilities/handleLocale'

export const styles = StyleSheet.create({
  page: { backgroundColor: color.aliceBlue },
  section: { textAlign: 'center', margin: 30 },
  judul: { textAlign: 'center', marginBottom: 30 },
  informasi: {
    marginLeft: 30,
    marginTop: 30,
    marginRight: 20,
  },
  infoWrapper: { flexDirection: 'row' },
  image: { width: '200' },
  title: {
    fontSize: 43,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 10,
  },
  address: {
    fontSize: 13,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 10,
  },
  order: {
    fontSize: 14,
    textAlign: 'center',
  },
  info: {
    fontSize: 16,
    marginTop: 15,
  },
  judulTotal: {
    fontSize: 16,
    marginRight: 25,
    marginLeft: 'auto',
    marginTop: 130,
  },
  total: {
    fontSize: 25,
    marginRight: 25,
    marginLeft: 'auto',
    marginTop: 15,
  },
})

export const cookiesData = () => {
  const cookiesData = getCookies(0)
  if (cookiesData) {
    const orderId = findCookiesItem(cookiesData, 'orderId')
    const mobil = findCookiesItem(cookiesData, 'car')
    const tanggalAwal = findCookiesItem(cookiesData, 'tanggalAwal')
    const tanggalAkhir = findCookiesItem(cookiesData, 'tanggalAkhir')
    const lamaHari = findCookiesItem(cookiesData, 'lamaHari')
    const harga = findCookiesItem(cookiesData, 'price')
    const formattedHarga = localePriceFormat(harga)
    return {
      orderId,
      mobil,
      tanggalAwal,
      tanggalAkhir,
      lamaHari,
      formattedHarga,
    }
  }
  return null
}
