// import { compare, genSaltSync, hash } from 'bcryptjs'
import { filter, isEmpty, some } from 'lodash'
import { useEffect, useState } from 'react'
import { getApi, postApi } from '../utilities/handleApi'
import { setLocalStorage } from '../utilities/handleStorage'
import validateForm from '../utilities/validationForm'

const validation = (props) => {
  const isRegister = props.pathname === '/register'
  const isLogin = props.pathname === '/login'
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
    const confirmPw = { confirmPassword: '' }
    const fetch = async () => {
      const url = process.env.REACT_APP_BASE_URL
      setUsers(await getApi(url))
    }
    fetch()
    isRegister && Object.assign(value, confirmPw)
  }, [])

  useEffect(() => {
    setIsSubmitted(false)
    setErrors(validateForm(value, isRegister))
  }, [value])

  const isSomeEmpty = (obj) => {
    const values = Object.values(obj)
    return some(values, (x) => isEmpty(x))
  }

  // const filterUser = () => {
  //   return filter(users, (data) => data.email === value.email)
  // }

  const getUser = async () => {
    setIsLoading(true)
    const isErrorEmpty = isEmpty(errors)
    // const isSamePassword = await compare(value.password, users[0].password)
    const filteredUser = filter(
      users,
      (data) => data.email === value.email && data.password === value.password
    )
    if (!isEmpty(filteredUser) && isErrorEmpty) {
      setLocalStorage('token', 'testToken123')
      props.navigate('/')
    } else {
      if (isErrorEmpty) {
        setIsSubmitted(true)
        setErrors((prev) => ({
          ...prev,
          failedAlert: 'Gagal! Email atau password salah.',
        }))
      }
    }
    setIsLoading(false)
  }

  const createUser = async () => {
    setIsLoading(true)
    const url = process.env.REACT_APP_BASE_URL
    const isErrorEmpty = isEmpty(errors)
    const isValueEmpty = isSomeEmpty(value)
    const filteredUser = filter(users, (data) => data.email === value.email)
    // const salt = genSaltSync(10)
    // const newPassword = await hash(value.password, salt)
    if (isEmpty(filteredUser)) {
      if (!isValueEmpty && isErrorEmpty) {
        const params = {
          email: value.email,
          password: value.password,
        }
        await postApi(url, params)
        setIsSubmitted(true)
        props.navigate('/login')
      }
    } else {
      if (isErrorEmpty) {
        setIsSubmitted(true)
        setErrors((prev) => ({
          ...prev,
          failedAlert: 'Email sudah terdaftar.',
        }))
      }
    }
    setIsLoading(false)
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    setValidated(true)
    if (isRegister) createUser()
    if (isLogin) getUser()
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
