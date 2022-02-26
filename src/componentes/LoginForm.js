
import React, {  useContext, useState } from 'react'
import RegisterForm from './RegisterForm';
import Login from './Login'
import { DataContext } from '../context/DataContext';

function LoginForm() {
  const {authRegisterForm} = useContext(DataContext)
  return (
    <>
      {authRegisterForm?(
        <RegisterForm/>
      ):(<Login/>
      )}
    </>
  )
}

export default LoginForm


