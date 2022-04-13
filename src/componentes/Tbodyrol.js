import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert"
import { DataContext } from "../context/DataContext";
import { URL_ELIMINAR_ROL } from "../helpers/endPoints"


export const Tbodyrol = ({ role: rl, index }) => {

	const [roleAuth, setRoleAuth] = useState([])
	const {user,currentScreen} = useContext(DataContext)

	//consultamos el localStorage y guardamos valor de rol 
	//para poder filtrar funciones mediante la misma
	useEffect(()=>{
		const data = localStorage.getItem('auth')
		if(!data ){
			localStorage.setItem('auth',JSON.stringify(user))
			setRoleAuth(user.usuarioEncontrado.roleAuth)
			return
		}
		const usuarioAuth = JSON.parse(data);
		setRoleAuth(usuarioAuth.usuarioEncontrado.rol)		
	},)

	const deleteRol= async()=>{
		if(roleAuth==='ADMIN'){
			const {_id} = rl
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
				}
			});
		}else{
			swal({
				title: "ADVERTENCIA",
				text: "Su rol no posee permisos para eliminar roles",
				icon: "warning",
      			button: "ok",
			})
		}	
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
