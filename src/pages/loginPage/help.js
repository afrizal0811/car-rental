import { isEmpty } from 'lodash'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getApi } from '../../utilities/handleApi'
// import { setCookies } from '../../utilities/handleCookies'
import validateForm from '../../utilities/validationForm'
export default function handleButton() {
  const navigate = useNavigate()
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

  const getUser = () => {
    setIsLoading(true)
    const isErrorEmpty = isEmpty(errors)
    const filterUser = users.filter(
      (data) => data.password === value.password && data.email === value.email
    )

    if (!isEmpty(filterUser) && isErrorEmpty) {
      //   setCookies('token', 'testToken123')
      navigate('/')
    } else {
      isErrorEmpty && setIsSubmitted(true)
    }

    setIsLoading(false)
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    setValidated(true)
    getUser()
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
