import { compare, genSaltSync, hash } from 'bcryptjs'
import { filter, isEmpty, some } from 'lodash'
import { useEffect, useState } from 'react'
import { getApi, postApi } from '../utilities/handleApi'
import { setLocalStorage } from '../utilities/handleStorage'
import validateForm from '../utilities/validationForm'

const isSomeEmpty = (obj) => {
  const values = Object.values(obj)
  return some(values, (x) => isEmpty(x))
}

const validation = (props) => {
  const [users, setUsers] = useState([])
  const [errors, setErrors] = useState({})
  const [validated, setValidated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [value, setValue] = useState({
    email: '',
    password: '',
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

  const filterUser = () => {
    return filter(users, (data) => data.email === value.email)
  }
  const getUser = async () => {
    setIsLoading(true)
    const isErrorEmpty = isEmpty(errors)
    const isSamePassword = await compare(value.password, users[0].password)
    const filteredUser = filterUser(users)

    if (!isEmpty(filteredUser) && isSamePassword && isErrorEmpty) {
      setLocalStorage('token', 'testToken123')
      props.navigate('/')
    } else {
      isErrorEmpty && setIsSubmitted(true)
    }

    setIsLoading(false)
  }

  const createUser = async () => {
    setIsLoading(true)
    const url = process.env.REACT_APP_BASE_URL
    const isErrorEmpty = isEmpty(errors)
    const isValueEmpty = isSomeEmpty(value)
    const filteredUser = filterUser(users)
    const salt = genSaltSync(10)
    const newPassword = await hash(value.password, salt)

    if (isEmpty(filteredUser)) {
      if (!isValueEmpty && isErrorEmpty) {
        const params = {
          email: value.email,
          password: newPassword,
        }
        await postApi(url, params)
        setIsSubmitted(true)
      }
    } else {
      if (isErrorEmpty) {
        setIsSubmitted(true)
        setErrors((prev) => ({ ...prev, hasEmail: 'Email sudah terdaftar.' }))
      }
    }
    setIsLoading(false)
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    setValidated(true)
    if (props.pathname === '/register') createUser()
    if (props.pathname === '/login') getUser()
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

export default validation
