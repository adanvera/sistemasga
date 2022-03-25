import React from 'react';
import { Container, Form, FormControl, Button, Table} from 'react-bootstrap';
import ProjectList from './ProjectList';
import swal from 'sweetalert';
import { useEffect } from 'react';
import { useState } from 'react';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import myphoto from '../images/perfil.png'

import { DataContext } from '../context/DataContext'




function Proyects({rol}) {

  const [currentScreen,setCurrentScreen] = useState({us:true,rol:false,per:false})

  const showalert=()=>{
    swal({
      title: "Epaa, esa función está en desarrollo",
      text: "En la proxima ya estará funcionando crack ;) !",
      icon: "warning",
      button: "ok",
    });
  }


  
  const {user} = useContext(DataContext)
	const [nombre,setNombre] = useState('')	
  const [apellido, setApellido] = useState('')
	

  	//consultamos el localStorage
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
        <nav  className='items'>
            <ion-icon name="reorder-three-outline"></ion-icon>
            <button type="submit" 
              className={rol === "ADMIN" ? 'nav-sg': 'nav-sg disabled'} 
            
              onClick={ ()=>setCurrentScreen({...currentScreen,us:true,rol:false,per:false})} >Proyectos
            </button>
            <button 
              type="submit" 
              className={rol === "ADMIN" ? 'nav-sg': 'nav-sg disabled'}>item 2
            </button>
            <button type="submit" className={rol === "ADMIN" ? 'nav-sg': 'nav-sg disabled'} onClick={()=>setCurrentScreen({...currentScreen,rol:true,us:false,per:false})} >item 3</button>
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
      <Container fluid={true} className="mt-5" id='proyects'>
        <div className='row'>
          <div className='col pb-2'>
            <h4>PROYECTOS</h4>
          </div>
          <div className='col a-end'>
            <button  className={rol === 'ADMIN' ? 'btn btn-cr-pro' : 'btn btn-cr-pro disabled'}  type="" onClick={()=>showalert()}>crear proyecto</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 form-search'>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Buscar proyecto" className="me-2" aria-label="Search"/>
              <Button variant="outline-success"><ion-icon name="search-outline"></ion-icon></Button>
            </Form>
          </div>
        </div>

        <ProjectList rol={rol}/>


      </Container>
    </>
  );
}

export default Proyects;
