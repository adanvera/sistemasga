import React from "react";
import swal from "sweetalert";
import { useState } from "react";
import { Button, Modal } from "bootstrap";
import EditUser from "../modals/EditUser";
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

	const editUserModal= async()=> {	  
		
	}

	return(
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
				<div className="padright edituser"  onClick = {editUserModal}>
					<span className="pten" >
						<ion-icon name="options-outline"></ion-icon>
					</span>
				</div>
			</td>
		</tr> 
		
    </>
	)
}


