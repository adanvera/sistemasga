import React, { useEffect } from 'react';
import { Container, Button, Modal} from 'react-bootstrap';
import { useState } from 'react';
import RegisterUser from '../modals/RegisterUser';
import UsersLists from './UsersLists';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
const urlUsers = "http://localhost:4000/api/usuario/"



function Seguridad() {

  function ModalRegister() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="btn btn-cr-pro" onClick={handleShow}>crear usuario</Button>
  
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Registrar usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <RegisterUser/>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
   const [usuario, setUsurio] = useState([])

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

  return (
    <>
      <Container fluid={true} className="mt-5" id='seguridad'>
        <div className='row'>
          <div className='col pb-2'>
            <h4>SEGURIDAD</h4>
          </div>
          <div className='col a-end'>
            <div><ModalRegister /></div>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-md-2' ><button type="submit" className="btn-crear" >usuarios</button></div>
          <div className='col-md-2'><button type="submit" className="btn-crear" >permisos</button></div>
          <div className='col-md-2'><button type="submit" className="btn-crear" >roles</button></div>
        </div>
        <div className='row'>
          <div className='col-md-4 form-search'>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Buscar usuario" className="me-2" aria-label="Search"/>
              <Button variant="outline-success"><ion-icon name="search-outline"></ion-icon></Button>
            </Form>
          </div>
        </div>
        {usuario.length>0 && <UsersLists usuario={usuario}/>}
        

      </Container> 
    </>
  );
}

export default Seguridad;
