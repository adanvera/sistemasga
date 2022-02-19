
import { Form } from 'react-bootstrap'
import React, { useState } from 'react'

function LoginForm({Login, error}) {
  const [details, setDetails] = useState({name: "" , email: "" , password: "" });
  const submittrigger = e => {
    e.preventDefault();

    Login(details);
  }
  return (
      <div className='container-fluid'>
        <form onSubmit={submittrigger}>
          <div className='row'>
            <div className='col-md-6' id='background-login'></div>

            <div className='col-md-6' id='login-box'>
              <div className='container-fluid h-100'>
                <div id='logo-login'></div>
                <div>
                  <h4 id='login-text'>GESTIONA TUS PROYECTOS DE MANERA FÁCIL Y RÁPIDA</h4>
                </div>
                <h1>INICIAR SESION</h1>
                <div className=''>
                    <div className='col-md-12 box-input pb-5'>
                      <label for="">Nombre de usuario: </label>
                      <input className='input-ct' type="text" name="name" id='name'/>
                    </div>
                    <div className='col-md-12 box-input pb-5'>
                      <label for="password">Contraseña: </label>
                      <input className='input-ct' type="password" name="password"/>
                    </div>
                    <p className='p-0 m-0'>No tienes una cuenta?, <span> crear cuenta</span> </p>
                    <p  className='p-0 m-0'>Olvidaste tu contraseña?, <span>resetear contraseña</span> </p>
                    <button className='mt-4 btn-log' type="submit" name="loginbtn">Iniciar sesión</button>
                  </div>
                </div>
            </div>
          </div>
        </form>
      </div>
  )
}

export default LoginForm
