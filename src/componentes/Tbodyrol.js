import React from "react"
import swal from "sweetalert"
import { URL_DEL_ROL } from "../helpers/endPoints"



export const Tbodyrol = ({ role: rl, index }) => {

	const deleteRol= async()=>{
		swal({
			title: "¿Estas seguro?",
			text: "Una vez elimnado este rol no se puede revertir",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		  })
		  .then( async (willDelete) => {
			if (willDelete) {
				swal("Rol eliminado exitosamente", {
					icon: "success",
				});
				console.log(rl)
				await fetch(URL_DEL_ROL+rl._id, {method: 'DELETE', headers: {"Content-Type":"application/json"}} )
			} else{
			  swal("Eliminacion cancelada");
			}
		  });
	}
	return (
		<>
			<tr>
			<td className="pl-dos">{index}</td>
			<td>{rl.rol}</td>
			<td>{rl.acceso }</td>
			<td className="d-flex">
				<div className="padright deleteuser">
					<span className="pten" onClick={deleteRol}>
						<ion-icon name="trash-bin-outline"></ion-icon>
					</span>
				</div>
				<div className="padright edituser">
					<span className="pten">
						<ion-icon name="create-outline"></ion-icon>
					</span>
				</div>
			</td>
			</tr>
		</>
	)
}
