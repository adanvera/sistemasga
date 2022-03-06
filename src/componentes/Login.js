import React from 'react';
import swal from 'sweetalert';
import { FloatingLabel,Form } from 'react-bootstrap';
import { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext';
import { URL_AUTH_USUARIO }from '../helpers/endPoints.js'
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const {setUser} = useContext(DataContext)
  const [details, setDetails] = useState({ correo: "" , password: "" });
  let navigate = useNavigate()
  
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
          const res = await fetch(URL_AUTH_USUARIO,option),
              json = await res.json()
          if(!res.ok){
            return swal({
              icon: "error",
              text:(json.msg),
            });
          }      
          setUser(json)
          navigate('dashboard',{replace:true})
        } catch (error) {
          return 'Ocurrio un error '+error
        }          
  }

  const resetearPassword = ()=>{
    navigate('resetear-password',{replace:true})
  }
  
  const userRegister= ()=>{
   navigate('registrar',{replace:true})
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
                    <div className='col-md-12 box-input pb-4 col'>
                      <FloatingLabel id="floatingInputMail" label="Correo electrónico" className="mb-3">
                        <Form.Control  className='' type="email" placeholder="Ingrese correo" name="email" id='email' onChange={e => setDetails({...details, correo: e.target.value})}  />
                      </FloatingLabel>
                    </div>
                    <div className='col-md-12 box-input pb-2'>
                      <FloatingLabel id="floatingPassword" label="Contraseña">
                        <Form.Control  type="password" placeholder="Ingrese contraseña" name="password"  onChange={e => setDetails({...details, password: e.target.value})} />
                      </FloatingLabel>
                    </div>
                    <p className='p-0 m-0'>No tienes una cuenta?<span className='sp-link' onClick={userRegister}> crear cuenta</span> </p>
                    <p  className='p-0 m-0'>Olvidaste tu contraseña? <span className='sp-link'onClick={resetearPassword} >cambiar contraseña</span> </p>
                    <button className='mt-3 btn-log mb-5' type="submit" name="loginbtn">Iniciar sesión</button>
                  </div>
                </div>
            </div>
          </div>
        </form>
    </div>
  );
}

export default Login;
