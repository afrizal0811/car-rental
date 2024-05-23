export const dataList = [
  'Tidak termasuk biaya makan sopir Rp 75.000/hari',
  'Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp20.000/jam',
  'Tidak termasuk akomodasi penginapan',
]

export const dateNow = new Date()

export const endDate = (date, days) => {
  let result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}
