import axios from 'axios'

export const getApi = async (URL) => {
  const url = await axios
    .get(URL)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
  return url
}

export const postApi = async (URL, params) => {
  const url = await axios
    .post(URL, params)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error
    })
  return url
}
