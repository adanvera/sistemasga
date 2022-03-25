import React from "react"
import swal from "sweetalert"
<<<<<<< HEAD
import { URL_DEL_ROL } from "../helpers/endPoints"

=======
import { URL_ELIMINAR_ROL } from "../helpers/endPoints"
>>>>>>> 58add261743a6d1a08c14b6f5c3a9064c6a861c8


export const Tbodyrol = ({ role: rl, index }) => {

	const deleteRol= async()=>{
		const {_id} = rl
		console.log(_id);
		swal({
			title: "¿Estas seguro?",
			text: "Una vez elimnado este rol no se puede revertir",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		  })
		  .then( async (willDelete) => {
			if (willDelete) {
				await fetch(URL_ELIMINAR_ROL+_id, {method: 'DELETE', headers: {"Content-Type":"application/json"}} )
			  	swal("Rol eliminado exitosamente", {
				icon: "success",
			  });
			} else {
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
