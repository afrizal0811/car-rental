import React, { useEffect } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import imagePath from '../../constants/imagePath'
import LoginPage from './login_page/LoginPage'
import RegisterPage from './register_page/RegisterPage'
import './styled.css'
const AuthPage = () => {
  const { type } = useParams()
  const { navigate } = useOutletContext()
  const isLogin = type === 'login'
  const isRegister = type === 'register'

  useEffect(() => {
    if (!isLogin && !isRegister) {
      navigate('/')
    }
  }, [isLogin, isRegister])

  return (
    <section className='d-flex justify-content-center align-items-center w-100 h-100 py-2 px-1 p-md-0'>
      {isLogin && <LoginPage isLogin={isLogin} />}
      {isRegister && <RegisterPage isRegister={isRegister} />}
      <img
        src={imagePath.signIn}
        alt='sign-img'
        className='d-none d-lg-block w-50'
      />
    </section>
  )
}

export default AuthPage
