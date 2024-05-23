import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'
import { getApi, postApi } from '../../utilities/handleApi'
import validateForm from '../../utilities/validationForm'

const isSomeEmpty = (obj) => {
  return Object.values(obj).some((x) => x === null || x === '')
}

export default function handleButton() {
  const [users, setUsers] = useState([])
  const [errors, setErrors] = useState({})
  const [validated, setValidated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [value, setValue] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  useEffect(() => {
    const fetch = async () => {
      const url = process.env.REACT_APP_BASE_URL
      setUsers(await getApi(url))
    }
    fetch()
  }, [])

  useEffect(() => {
    setIsSubmitted(false)
    setErrors(validateForm(value))
  }, [value])

  const createUser = async () => {
    setIsLoading(true)
    const url = process.env.REACT_APP_BASE_URL
    const isValueEmpty = isSomeEmpty(value)
    const filterUser = users.filter((data) => data.email === value.email)
    
    if (isEmpty(filterUser)) {
      if (!isValueEmpty && isEmpty(errors)) {
        const params = {
          email: value.email,
          password: value.password,
        }
        await postApi(url, params)
        setIsSubmitted(true)
      }
    } else {
      setIsSubmitted(true)
      setErrors((prev) => ({ ...prev, hasEmail: 'Email sudah terdaftar.' }))
    }
    setIsLoading(false)
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    setValidated(true)
    createUser()
  }

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }

  return {
    errors,
    handleChange,
    handleOnSubmit,
    isLoading,
    isSubmitted,
    validated,
    value,
  }
}
