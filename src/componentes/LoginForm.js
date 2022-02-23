
import React, { useContext, useState } from 'react'
import { DataContext } from '../backend/context/DataContext';
import swal from 'sweetalert';
import RegisterForm from './RegisterForm';
import Login from './Login'

const URL = 'http://localhost:4000/api/auth'
function LoginForm({login}) {
  const {setUser} = useContext(DataContext)
  const [details, setDetails] = useState({ correo: "" , password: "" });
  

  const[isRegister, setIsRegister]= useState (false)

  return (
    <>
      {isRegister?(
        <RegisterForm/>
      ):(<Login isLogin = {setIsRegister}/>
      )}
    </>
  )
}

export default LoginForm


