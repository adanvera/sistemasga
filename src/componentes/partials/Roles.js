import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import RegisterRole from "../../modals/RegisterRole";
import { FormControl, Form } from "react-bootstrap";
import RoleList from '../RoleList';
const urlRoles = "http://localhost:4000/api/role/"



export const Roles = () => {
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

	const [role, setRole] = useState([])
	useEffect(() => {
		const getRole = async() =>{
		  try {
			const res = await fetch(urlRoles),
			data = await res.json()

			console.log(data.roles)
	
			setRole(data.roles)
			
		  } catch (error) {
			console.log(error);
		  }
		}
		getRole()
	
	  }, [])
	
		console.log(role);

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
		{<RoleList roles={role} />} 
    </>
  );
}

export default Roles;
