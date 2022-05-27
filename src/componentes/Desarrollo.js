import React from 'react';
import { Container, Form, FormControl, Button, Table, Modal } from 'react-bootstrap';
import ProjectList from './ProjectList';
import swal from 'sweetalert';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import myphoto from '../images/perfil.png'
import { DataContext } from '../context/DataContext'
import { URL_PROYECTOS } from '../helpers/endPoints';
import Other from './Other';
import CreateProject from './partials/CreateProject';
import NoData from './NoData';



function Desarrollo({ rol }) {
  // variable para la navegacion entre ventanas mediante btotones a ser clikeadas
  const [currentScreen, setCurrentScreen] = useState({ pr: true, other: false, prCreate: false })
  const { user } = useContext(DataContext)
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [proyecto, setProyecto] = useState([])

  //consultamos el localStorage
  useEffect(() => {
    const data = localStorage.getItem('auth')
    if (!data) {
      setNombre(user.usuarioEncontrado.nombre)
      localStorage.setItem('auth', JSON.stringify(user));
      setApellido(user.usuarioEncontrado.apellido)
      localStorage.setItem('auth', JSON.stringify(user))
      return
    }
    const usuario = JSON.parse(data);
    setNombre(usuario.usuarioEncontrado.nombre);
    setApellido(usuario.usuarioEncontrado.apellido);

    const getProject = async () => {
      try {
        const res = await fetch(URL_PROYECTOS),
          data = await res.json()
        setProyecto(data.proyectos)
      } catch (error) {
        console.log(error);
      }
    }
    getProject()

  }, [])

  return (
    <>
      <div className="navbar justify-content-between w-100 " variant="dark">
        <nav className='items'>
          <ion-icon name="reorder-three-outline"></ion-icon>
          <button type="submit"
            className="nav-sg"
            onClick={() => setCurrentScreen({ ...currentScreen, pr: true, other: false, prCreate: false })} > <p><ion-icon name="grid-outline"></ion-icon> Proyectos</p>
          </button>
          <button type="submit" className="nav-sg" onClick={() => setCurrentScreen({ ...currentScreen, pr: false, other: true, prCreate: false })} >Other</button>
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
        {currentScreen.pr &&
          <>
            {proyecto.length === 0 && <NoData />}
            {proyecto.length !== 0 && <ProjectList proyecto={proyecto} />}
          </>
        }
        {currentScreen.prCreate && <CreateProject />}
        {currentScreen.other && <Other />}
      </Container>
    </>
  );
}

export default Desarrollo;
