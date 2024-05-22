import carList from '../../constants/carList'

const removeDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

const kategori = carList.map((data) => data.category)
const filteredKategori = removeDuplicates(kategori)
export const kategoriOptions = filteredKategori.map((data) => ({
  text: data,
  value: data,
}))

const prices = carList.map((data) => data.price)
const maxPrice = Math.max(...prices)
export const hargaOptions = [
  { text: '< 200.000', value: [0, 200000] },
  { text: '200.000 - 300.000', value: [200000, 300000] },
  { text: '> 300.000', value: [300000, maxPrice] },
]

export const statusOptions = [
  { text: 'Sedia', value: true },
  { text: 'Disewa', value: false },
]

export const sorting = (obj) => {
  return obj.sort((a, b) =>
    a.isAvailable < b.isAvailable ? 1 : b.isAvailable < a.isAvailable ? -1 : 0
  )
}
