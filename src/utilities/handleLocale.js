export const localeDateAllNumber = (date) => {
  return date.toLocaleDateString('id', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })
}
export const localeDateShortMonth = (date) => {
  return date.toLocaleDateString('id', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
export const localeDateWeekday = (date) => {
  return date.toLocaleDateString('id', { weekday: 'long' })
}

export const localeTime = (date) => {
  return date.toLocaleTimeString('id', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

export const localePriceFormat = (price) => {
  return new Intl.NumberFormat('id', {
    style: 'currency',
    currency: 'IDR',
  }).format(price)
}
