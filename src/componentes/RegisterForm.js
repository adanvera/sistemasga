import {Container } from 'react-bootstrap'
import React from 'react';
import { FloatingLabel,Form } from 'react-bootstrap';
import { Button } from 'bootstrap';


function RegisterForm() {
  return (
    <Container fluid={true}  className='register-bg w-100'>
       <Container className='register-box'>
           <section className='container-fluid register-content'>
                <h1>REGISTRAR CUENTA</h1>
                <div>
                    <h6>Nombre completo</h6>
                    <div className='row'>
                        <div className='col-md-5'>
                            <>
                                <FloatingLabel controlId="floatingInputName" label="Nombre" className="mb-3">
                                    <Form.Control type="text" placeholder="Ingrese nombre" />
                                </FloatingLabel>
                            </>
                        </div>
                        <div className='col-md-5'>
                            <>
                                <FloatingLabel controlId="floatingInputLastName" label="Apellido" className="mb-3">
                                    <Form.Control type="text" placeholder="Ingrese apellido" />
                                </FloatingLabel>
                            </>
                        </div>
                    </div>
                    <h6>Dato de contacto</h6>
                    <div className='row'>
                        <div className='col-md-10'>
                            <>
                                <FloatingLabel controlId="floatingInputMail" label="Correo electrónico" className="mb-3">
                                    <Form.Control type="mail" placeholder="Ingrese correo electrónico" />
                                </FloatingLabel>
                            </>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-5'>
                            <FloatingLabel controlId="floatingPassword" label="Contraseña">
                                <Form.Control type="password" placeholder="Ingrese contraseña" />
                            </FloatingLabel>
                        </div>
                        <div className='col-md-5'>
                            <FloatingLabel controlId="floatingConfirmPassword" label="Confirmar contraseña">
                                <Form.Control type="password" placeholder="Imgrese contraseña" />
                            </FloatingLabel>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-4'>
                            <button type="submit" className='btn-crear'>CREAR CUENTA</button> 
                        </div>
                    </div>
                </div>
           </section>
       </Container>
    </Container>
  );
}

export default RegisterForm;
