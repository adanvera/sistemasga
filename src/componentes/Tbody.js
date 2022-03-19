import React from "react";


export const Tbody = ({usuario,index}) => {
  console.log(usuario);
	return (
    <>
	<tr>
			<td>{index}</td>
			<td>
				<span className="sp-name">
					{usuario.nombre} {usuario.apellido}
				</span>
			</td>
			<td>{usuario.correo}</td>
			<td>{usuario.rol}</td>
			<td className="d-flex">
				<div className="padright deleteuser">
					<span className="pten" >
						<ion-icon name="trash-bin-outline"></ion-icon>
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


