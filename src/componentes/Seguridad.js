import React from 'react';
import { Container, Button, Modal} from 'react-bootstrap';
import { useState } from 'react';
import RegisterUser from '../modals/RegisterUser';


function Seguridad() {
  function ModalRegister() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="btn btn-cr-pro" onClick={handleShow}>crear usuario</Button>
  
        <Modal show={show} onHide={handleClose}>
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
      </Container> 
    </>
  );
}

export default Seguridad;
