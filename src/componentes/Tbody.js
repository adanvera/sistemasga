import React from "react";
import swal from "sweetalert";



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
				await fetch('http://localhost:4000/api/usuario/'+usuario.uui, {method: 'DELETE',})
			} else {
		  		swal("Eliminación cancelada");
		}
	  });
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
			<td className="d-flex">
				<div className="padright deleteuser">
					<span className="pten"  onClick = {deleteUser}>
						<ion-icon name="trash-bin-outline" ></ion-icon>
					</span>
				</div>
				<div className="padright edituser">
					<span className="pten" >
						<ion-icon name="create-outline"></ion-icon>
					</span>
				</div>
			</td>
		</tr> 
		
    </>
	)
}


