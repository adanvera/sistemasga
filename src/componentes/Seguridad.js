import React, { useEffect } from 'react';
import { Container} from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import myphoto from '../images/perfil.png'


import { Usuarios } from './partials/Usuarios';
import { useContext } from 'react';
import Roles from './partials/Roles';
import { DataContext } from '../context/DataContext'
const urlUsers = "http://localhost:4000/api/usuario/"



function Seguridad() {

  
  
  const [usuario, setUsurio] = useState([])
  const [currentScreen,setCurrentScreen] = useState({us:true,rol:false,per:false})
  
  useEffect(() => {
    const getUser = async() =>{
      try {
        const res = await fetch(urlUsers),
        data = await res.json()
        
        setUsurio(data.usuarios)

      } catch (error) {
        console.log(error);
      }
    }
    getUser()
  }, [])
  console.log(currentScreen);

  const {user} = useContext(DataContext)
	const [nombre,setNombre] = useState('')	
  const [apellido, setApellido] = useState('')
	


	//consultamos el localStorage 
  //se obitne el nombre y apillod del usuario logeado
	useEffect(()=>{
		const data = localStorage.getItem('auth')
		if(!data ){
			setNombre(user.usuarioEncontrado.nombre)
			localStorage.setItem('auth',JSON.stringify(user));
            setApellido(user.usuarioEncontrado.apellido)
            localStorage.setItem('auth',JSON.stringify(user))
			return
		}
		const usuario = JSON.parse(data);
		setNombre(usuario.usuarioEncontrado.nombre);
        setApellido(usuario.usuarioEncontrado.apellido);
	},)

  return (
    <>
      <div className="navbar justify-content-between w-100 " variant="dark">
        <nav className="items">
            <ion-icon name="reorder-three-outline"></ion-icon>
            <button type="submit" className='nav-sg' onClick={ ()=>setCurrentScreen({...currentScreen,us:true,rol:false,per:false})} >usuarios</button>
            <button type="submit" className='nav-sg'>permisos</button>
            <button type="submit" className='nav-sg' onClick={()=>setCurrentScreen({...currentScreen,rol:true,us:false,per:false})} >roles</button>
        </nav>
        <nav className="">
            <Link to="#pricing" className="d-flex">
                <div className="t-a">
                    <p className="p-style fw-100">Bienvenido</p>
                    <span className="username">{nombre} {apellido}</span>
                </div>
                <div className="pl">
                    <img src={myphoto} alt="" />
                </div>
            </Link>
        </nav>
      </div>

      <Container fluid={true} className="mt-5" id='seguridad'>
        <div className='row'>
          <div className='col pb-2'>
            <h4>SEGURIDAD - NAME </h4>
          </div>
          {/* <div className='col a-end'>
            <div><ModalRegister /></div>
          </div> */}
        </div>
        {/* se agrega condicional para renderizar la ventana respectiva */}
        {currentScreen.us && <Usuarios usuario={usuario}/> }
        { currentScreen.rol && <Roles/>  }
        
        

      </Container> 
    </>
  );
}

export default Seguridad;
