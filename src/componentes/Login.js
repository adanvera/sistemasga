import React from 'react';
import swal from 'sweetalert';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext';
import { URL_AUTH_USUARIO } from '../helpers/endPoints.js'
import { useNavigate } from 'react-router-dom';



const Login = () => {
  //declaracion de variables a ser utilizadas
  const { setUser } = useContext(DataContext)
  const [details, setDetails] = useState({ correo: "", password: "" });
  let navigate = useNavigate()

  //evento para verificar si el usuario esta ingresando 
  //los datos correspondientes para poder verificar si exite un 
  //usuaio respectivamente con esas credenciales y proceder a iniciar
  //sesion
  const submittrigger = async (e) => {
    e.preventDefault();
    if (details.correo === '' || details.password === '') {
      return swal({
        icon: "error",
        text: 'Todos los campos son obligatorios',
      });
    }
    let option = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    };
    try {
      const res = await fetch(URL_AUTH_USUARIO, option),
        json = await res.json()
      if (!res.ok) {
        return swal({
          icon: "error",
          text: (json.msg),
        });
      }
      setUser(json)
      navigate('dashboard')
    } catch (error) {
      return 'Ocurrio un error ' + error
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
                <h4 id='login-text'>GESTIONÁ TUS PROYECTOS DE MANERA FÁCIL Y RÁPIDA</h4>
              </div>
              <h1 className='pb-2 hunolog'>INICIAR SESIÓN</h1>
              <div className=''>
                <div className='col-md-12 box-input pb-4 col'>
                  <FloatingLabel id="floatingInputMail" label="Correo electrónico" className="mb-3">
                    <Form.Control className='' type="email" placeholder="Ingrese correo" name="email" id='email' onChange={e => setDetails({ ...details, correo: e.target.value })} />
                  </FloatingLabel>
                </div>
                <div className='col-md-12 box-input pb-2'>
                  <FloatingLabel id="floatingPassword" label="Contraseña">
                    <Form.Control type="password" placeholder="Ingrese contraseña" name="password" onChange={e => setDetails({ ...details, password: e.target.value })} />
                  </FloatingLabel>
                </div>
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
