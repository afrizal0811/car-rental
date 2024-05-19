export const setCookies = (value) => {
  let now = new Date()
  let time = now.getTime()
  time += 3600 * 1000
  now.setTime(time)
  const stringy = JSON.stringify(value)
  document.cookie = 'data=' + stringy + '; expires=' + now.toGMTString() + '; path=/'
}

export const getCookies = () => {
  const cookieArray = document.cookie.split('; ')
  const arrayOfStrings = cookieArray[0].split('=')
  return JSON.parse(arrayOfStrings[1])
}

export const findCookiesItem = (data, text) => {
  return data.find((data) => data.name === text).value
}
