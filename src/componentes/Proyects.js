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
import CreateProject from '../modals/CreateProject'

function Proyects({ rol }) {

  const [currentScreen, setCurrentScreen] = useState({ us: true, rol: false, per: false })

  function ModalCreateProject() {

    //consultamos el localStorage
    useEffect(() => {
      const data = localStorage.getItem('auth')
      if (!data) {
        localStorage.setItem('auth', JSON.stringify(user))
        setRole(user.usuarioEncontrado.role)
        return
      }
      const usuario = JSON.parse(data);
      setRole(usuario.usuarioEncontrado.rol)
    })

    const [role, setRole] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
      if (role === 'ADMIN') {
        setShow(true);
      } else if (role !== 'ADMIN') {
        swal({
          title: "ADVERTENCIA",
          text: "Su rol no tiene permisos para crear un proyecto",
          icon: "warning",
          button: "ok",
        });
      }
    }
    return (
      <>
        <Button className="btn btn-cr-pro" onClick={handleShow}> <ion-icon name="add-circle-outline"></ion-icon> crear nuevo proyecto</Button>
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Crear nuevo proyecto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CreateProject />
          </Modal.Body>
        </Modal>
      </>
    )
  }

  const showalert = () => {
    swal({
      title: "Epaa, esa función está en desarrollo",
      text: "En la proxima ya estará funcionando crack ;) !",
      icon: "warning",
      button: "ok",
    });
  }

  const { user } = useContext(DataContext)
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')


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
  })

  return (
    <>
      <div className="navbar justify-content-between w-100 " variant="dark">
        <nav className='items'>
          <ion-icon name="reorder-three-outline"></ion-icon>
          <button type="submit"
            className="nav-sg"
            onClick={() => setCurrentScreen({ ...currentScreen, us: true, rol: false, per: false })} >Proyectos
          </button>
          <button
            type="submit"
            className="nav-sg">item 2
          </button>
          <button type="submit" className="nav-sg" onClick={() => setCurrentScreen({ ...currentScreen, rol: true, us: false, per: false })} >item 3</button>
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
            <ModalCreateProject />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 form-search'>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Buscar proyecto" className="me-2" aria-label="Search" />
              <Button variant="outline-success"><ion-icon name="search-outline"></ion-icon></Button>
            </Form>
          </div>
        </div>

        <ProjectList rol={rol} />


      </Container>
    </>
  );
}

export default Proyects;
