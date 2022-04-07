import React from "react";
import { Button } from "react-bootstrap";
import swal from "sweetalert";
const urlUsers = "http://localhost:4000/api/usuario/"


export const Tbody = ({ usuario, index }) => {
	const deleteUser = async () => {
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
					await fetch(urlUsers + usuario.uui, { method: 'DELETE', headers: { "Content-Type": "application/json" } })
				}
			});
	}

	const editUserModal = async () => {

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
						<span className="pten" onClick={deleteUser}>
							<ion-icon name="trash-bin-outline" ></ion-icon>
						</span>
					</div>
					<div className="padright edituser" onClick={editUserModal}>
						<span className="pten" >
							<ion-icon name="options-outline"></ion-icon>
						</span>
					</div>
				</td>
			</tr>
			<Button onClick={handleOpen}>Open modal</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="parent-modal-title"
				aria-describedby="parent-modal-description"
			>
				<Box sx={{ ...style, width: 400 }}>
					<h2 id="parent-modal-title">Text in a modal</h2>
					<p id="parent-modal-description">
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</p>
					<ChildModal />
				</Box>
			</Modal>

		</>
	)
}


