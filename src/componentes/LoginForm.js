
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
              <div id='logo-login'></div>
              <div>
                <h4 id='login-text'>GESTIONA TUS PROYECTOS
                  DE MANERA FÁCIL
                  Y RÁPIDA
                </h4>
              </div>
              <h1>Iniciar Sesion</h1>
              <div className='login-box'>
                <label for="">Nombre de usuario: </label>
                <input type="text" name="name" id='name'/>
              </div>
              <div>
                <label for="password">Contraseña: </label>
                <input type="password" name="password" value=""/>
              </div>
              
              <input type="submit" name="login" value="Iniciar sesion"/>
            </div>
          </div>
        </form>
      </div>
  )
}

export default LoginForm
