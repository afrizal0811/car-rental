export const setCookies = (name, value) => {
  let now = new Date()
  let time = now.getTime()
  time += 3600 * 1000
  now.setTime(time)
  const stringy = JSON.stringify(value)
  document.cookie =
    `${name}=` + stringy + '; expires=' + now.toGMTString() + '; path=/'
}

export const getCookies = (index) => {
  const cookie = document.cookie
  if (cookie) {
    const cookieArray = document.cookie.split('; ')
    const arrayOfStrings = cookieArray[index].split('=')
    return JSON.parse(arrayOfStrings[1])
  }
  return null
}

export const deleteAllCookies = () => {
  const cookies = document.cookie.split(';')

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i]
    const eqPos = cookie.indexOf('=')
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
  }
}

export const findCookiesItem = (data, text) => {
  return data.find((data) => data.name === text).value
}
