
import React, { useContext, useState } from 'react'
import { DataContext } from '../backend/context/DataContext';
import { FloatingLabel,Form } from 'react-bootstrap';

const URL = 'http://localhost:4000/api/auth'
function LoginForm({login}) {
  const {setUser} = useContext(DataContext)
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
      setUser(json)
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
                    <div className='box-input pb-4 col'>
                      <FloatingLabel controlId="floatingInputMail" label="Correo electrónico" className="mb-3">
                        <Form.Control className='' type="email" placeholder="Ingrese correo" name="email" id='email' onChange={e => setDetails({...details, correo: e.target.value})} value={details.name} />
                      </FloatingLabel>
                    </div>
                    <div className='col-md-12 box-input pb-2'>
                      <FloatingLabel controlId="floatingPassword" label="Contraseña">
                        <Form.Control type="password" placeholder="Ingrese contraseña" name="password"  onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                      </FloatingLabel>
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
