import carList from "../../constants/carList"

const removeDuplicates = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

const kategori = carList.map((data) => data.category)
export const kategoriOptions = removeDuplicates(kategori)
export const hargaOptions = ['< 400.000', '400.000 - 600.000', '> 600.000']
export const statusOptions = ['Sedia', 'Disewa']
