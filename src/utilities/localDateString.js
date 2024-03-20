const localDateString = (type, date) => {
  if (type === 'uk') {
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }
  if (type === 'us') {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    })
  }
}
export default localDateString
