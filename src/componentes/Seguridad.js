import React, { useEffect } from 'react';
import { Container, Button, Modal} from 'react-bootstrap';
import { useState } from 'react';
import RegisterUser from '../modals/RegisterUser';

import { Usuarios } from './partials/Usuarios';
import Roles from './partials/Roles';
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
          <div className='col-md-2' ><button type="submit" className="btn-crear" onClick={ ()=>setCurrentScreen({...currentScreen,us:true,rol:false,per:false})} >usuarios</button></div>
          <div className='col-md-2'><button type="submit" className="btn-crear" >permisos</button></div>
          <div className='col-md-2'><button type="submit" className="btn-crear" onClick={()=>setCurrentScreen({...currentScreen,rol:true,us:false,per:false})} >roles</button></div>
        </div>

        {currentScreen.us && <Usuarios usuario={usuario}/> }
        { currentScreen.rol && <Roles/>  }
        
        

      </Container> 
    </>
  );
}

export default Seguridad;
