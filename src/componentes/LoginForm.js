
import { Form } from 'react-bootstrap'
import React, { useState } from 'react'

function LoginForm({Login, error}) {
  const [details, setDetails] = useState({ email: "" , password: "" });
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
              <div className='container-fluid h-100' id='content-form'>
                <div id='logo-login'></div>
                <div className='pb-4'>
                  <h4 id='login-text'>GESTIONA TUS PROYECTOS DE MANERA FÁCIL Y RÁPIDA</h4>
                </div>
                <h1 className='pb-4 hunolog'>INICIAR SESION</h1>
                <div className=''>
                    <div className='col-md-12 box-input pb-4'>
                      <label for="email">Correo: </label>
                      <input className='input-ct' type="email" name="email" id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    </div>
                    <div className='col-md-12 box-input pb-5'>
                      <label for="password">Contraseña: </label>
                      <input className='input-ct' type="password" name="password"  onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <p className='p-0 m-0'>No tienes una cuenta?, <span className='sp-link'> crear cuenta</span> </p>
                    <p  className='p-0 m-0'>Olvidaste tu contraseña?, <span className='sp-link'>resetear contraseña</span> </p>
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
