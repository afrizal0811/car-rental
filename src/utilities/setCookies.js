import Cookies from 'js-cookie'

const setCookies = (name, start) =>
  Cookies.set(name, start, { expires: 1 / 3 })

export default setCookies
