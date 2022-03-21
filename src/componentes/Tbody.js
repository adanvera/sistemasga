import React from "react";
import swal from "sweetalert";
import { useState } from "react";
import { Button, Modal } from "bootstrap";
import { EditUser } from "./EditUser";
const urlUsers = "http://localhost:4000/api/usuario/"




export const Tbody = ({usuario,index}) => {
	const deleteUser= async()=>{
    	swal({
			title: "¿Estas seguro?",
			text: "Una vez eliminado el usuario no se puede revertir",
			icon: "warning",
			buttons: true,
			dangerMode: true,
	  	})
	  	.then(async (willDelete) => {
			if (willDelete) {
				swal("Usuario eliminado exitosamente", {
					icon: "success",
				});
				await fetch(urlUsers+usuario.uui, {method: 'DELETE', headers: {"Content-Type":"application/json"}} )
			} else {
		  		swal("Eliminación cancelada");
			}
	  	});
  	}

	function UserEdit({usuario}) {
		const [show, setShow] = useState(false);
		
		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);
	  
		return (
		  <>
			<Button variant="btn btn-cr-pro" onClick={handleShow}> <ion-icon name="add-circle-outline"></ion-icon><ion-icon name="create-outline"></ion-icon></Button>
	  
			<Modal show={show} onHide={handleClose} >
			  <Modal.Header closeButton>
			  	<Modal.Title>Editar usuario</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
			  	<EditUser usuario={usuario} />
			  </Modal.Body>
			</Modal>
		  </>
		);
	}


	return (
    <>
	<tr>
			<td className="pl-dos">{index}</td>
			<td>
				<span className="sp-name">
					{usuario.nombre} {usuario.apellido}
				</span>
			</td>
			<td>{usuario.correo}</td>
			<td>{usuario.rol}</td>
			<td className="d-flex justify-content-center">
				<div className="padright deleteuser">
					<span className="pten"  onClick = {deleteUser}>
						<ion-icon name="trash-bin-outline" ></ion-icon>
					</span>
				</div>
				<div className="padright edituser" >
					<span className="pten" >
						{/* <UserEdit usuario={usuario}/> */}
					</span>
				</div>
			</td>
		</tr> 
		
    </>
	)
}


