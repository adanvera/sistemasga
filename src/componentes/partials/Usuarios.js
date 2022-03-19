import React from 'react'
import UsersLists from '../UsersLists';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import {  Button, Modal} from 'react-bootstrap';
import { useState } from 'react'
import RegisterUser from '../../modals/RegisterUser';


export const Usuarios = ({ usuario }) => {
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
	return (
		<>
			<div className="row">
				<div className="col-md-12 form-search d-flex">
					<div className='col-md-6'>
						<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Buscar usuario"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">
								<ion-icon name="search-outline"></ion-icon>
							</Button>
						</Form>
					</div>
					<div className='col-md-6 t-a'>
						<ModalRegister />
					</div>
				</div>
			</div>
			{usuario.length > 0 && <UsersLists usuario={usuario} />}
		</>
	)
}
