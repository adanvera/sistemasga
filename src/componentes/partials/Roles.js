import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import RegisterRole from "../../modals/RegisterRole";
import { FormControl, Form } from "react-bootstrap";



function Roles() {
  function ModalRegisterRole() {
		const [show, setShow] = useState(false);
		
		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);
	  
		return (
		  <>
			<Button variant="btn btn-cr-pro" onClick={handleShow}> <ion-icon name="add-circle-outline"></ion-icon> crear rol</Button>
	  
			<Modal show={show} onHide={handleClose} >
			  <Modal.Header closeButton>
				<Modal.Title>Registrar rol</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
				<RegisterRole/>
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
							placeholder="Buscar rol"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">
							<ion-icon name="search-outline"></ion-icon>
						</Button>
					</Form>
					</div>
				<div className='col-md-6 t-a'>
						<ModalRegisterRole />
				</div>
			</div>
		</div>
	
    </>
  );
}

export default Roles;
