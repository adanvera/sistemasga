
import { Form } from 'react-bootstrap'
import React, { useState } from 'react'
const URL = 'http://localhost:4000/api/auth'
function LoginForm({login}) {
  const [details, setDetails] = useState({ correo: "" , password: "" });
  const submittrigger = async (e) => {
    e.preventDefault();
    let option = { 
              method: 'POST',
              headers:{
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(details)  
            };
    try {
      const res = await fetch(URL,option),
          json = await res.json()
      if(!res.ok){
        return alert(json.msg)
      }
      return login(true)
      
    } catch (error) {
      return 'Ocurrio un error '+error
    }          


    
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
                <h1 className='pb-2 hunolog'>INICIAR SESION</h1>
                <div className=''>
                    <div className='col-md-12 box-input pb-4'>
                      <label for="name">Correo: </label>
                      <input className='input-ct' type="text" name="name" id='name' onChange={e => setDetails({...details, correo: e.target.value})} value={details.name}/>
                    </div>
                    <div className='col-md-12 box-input pb-2'>
                      <label for="password">Contraseña: </label>
                      <input className='input-ct' type="password" name="password"  onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    </div>
                    <p className='p-0 m-0'>No tienes una cuenta?, <span className='sp-link'> crear cuenta</span> </p>
                    <p  className='p-0 m-0'>Olvidaste tu contraseña?, <span className='sp-link'>resetear contraseña</span> </p>
                    <button className='mt-3 btn-log mb-5' type="submit" name="loginbtn">Iniciar sesión</button>
                  </div>
                </div>
            </div>
          </div>
        </form>
      </div>
  )
}

export default LoginForm
