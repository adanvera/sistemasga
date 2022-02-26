
import React, {  useState } from 'react'
import RegisterForm from './RegisterForm';
import Login from './Login'

function LoginForm({login}) {

  const[isRegister, setIsRegister]= useState (false)

  return (
    <>
      {isRegister?(
        <RegisterForm/>
      ):(<Login isLogin = {setIsRegister} login=  {login}/>
      )}
    </>
  )
}

export default LoginForm


