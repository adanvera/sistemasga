import React from "react";
import swal from "sweetalert";



export const Tbody = ({usuario,index}) => {
	const deleteUser= async()=>{
    const isDelete = await swal({
      title: "Epaa, esa función está en desarrollo",
      text: "En la proxima ya estará funcionando crack ;) !",
      icon: "warning",
      button: "ok",
			value:true
    });
		if(isDelete){
			console.log(usuario);
			//llamar api y borrar el usuario
		}
  }


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


