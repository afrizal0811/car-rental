export const setLocalStorage = (name, data) => {
  localStorage.setItem(name, data)
}

export const getLocalStorage = (name) => {
  return localStorage.getItem(name)
}

export const deleteLocalStorage = () => {
  localStorage.clear()
}
