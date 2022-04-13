import {CButton,CModal,CModalBody,CModalFooter,CModalHeader,CModalTitle} from "@coreui/react";
import React, { useContext, useEffect, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import swal from "sweetalert";
import { DataContext } from "../context/DataContext";

const urlUsers = "http://localhost:4000/api/usuario/";

export const Tbody = ({ usuario, index }) => {

	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [correo, setCorreo] = useState("");
	const [password, setPassword] = useState("");
	const [repetirPassword, setRepetirPassword] = useState("");
	const [rol, setRolUser] = useState("");


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

	const initialState = {
		nombre: usuario.nombre,
		apellido: usuario.apellido,
		correo: usuario.correo,
		password: usuario.password,
		repetirPassword: usuario.repetirPassword,
		rol: usuario.role
	}

	const deleteUser = async () => {
		if(roleAuth==='ADMIN'){
			swal({
				title: "¿Estas seguro?",
				text: "Una vez eliminado el usuario no se puede revertir",
				icon: "warning",
				buttons: true,
				dangerMode: true,
			}).then(async (willDelete) => {
				if (willDelete) {
					swal("Usuario eliminado exitosamente", {
						icon: "success",
					});
					await fetch(urlUsers + usuario.uui, {
						method: "DELETE",
						headers: { "Content-Type": "application/json" },
					});
				}
			});
		}else{
			swal({
				title: "ADVERTENCIA",
				text: "Su rol no posee permisos para eliminar usuarios",
				icon: "warning",
      			button: "ok",
		})}
	};

	const [visible, setVisible] = useState(false);

	const submitToggle = async (e) => {
		e.preventDefault();

		swal({
			title: "Editar usuario",
			text: "¿Estas seguro de modicar los datos?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
	}

	const functionRole = (data) =>{
		if(data==='ADMIN'){
			return 'ADMINISTRADOR'
		}
		if(data==='user_role'){
			return 'OPERADOR'
		}
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
				<td>
					{functionRole(usuario.rol)}
					{/* {usuario.rol}	 */}
				</td>
				<td className="d-flex justify-content-center">
					<div className="padright deleteuser">
						<span className="pten" onClick={deleteUser}>
							<ion-icon name="trash-bin-outline"></ion-icon>
						</span>
					</div>
					<div className="padright edituser">
						<CButton className="pten" onClick={() => setVisible(!visible)}>
							<ion-icon name="options-outline"></ion-icon>
						</CButton>
					</div>
				</td>
			</tr>

			<CModal scrollable visible={visible} onClose={() => setVisible(false)}>
				<CModalHeader>
					<CModalTitle>Editar usuario</CModalTitle>
				</CModalHeader>
				<CModalBody>
					<section className="container-fluid register-content">
						<div id="">
							<div className="row justify-content-center">
								<div className="col-md-6">
									<>
										<FloatingLabel
											controlId="floatingInputName"
											label={usuario.nombre}
											className="mb-3"
										>
											<Form.Control
												type="text"
												placeholder={usuario.nombre}
												onChange={(e) => setNombre(e.target.value)}
											/>
										</FloatingLabel>
									</>
								</div>
								<div className="col-md-6">
									<>
										<FloatingLabel
											controlId="floatingInputLastName"
											label="Apellido"
											className="mb-3"
										>
											<Form.Control
												type="text"
												placeholder="Ingrese apellido"
											/>
										</FloatingLabel>
									</>
								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-md-12">
									<>
										<FloatingLabel
											controlId="floatingInputMail"
											label="Correo electrónico"
											className="mb-3"
										>
											<Form.Control
												type="mail"
												placeholder="Ingrese correo electrónico"
											/>
										</FloatingLabel>
									</>
								</div>
							</div>
							<div className="row justify-content-center">
								<div className="col-md-6">
									<FloatingLabel
										controlId="floatingPassword"
										label="Contraseña"
									>
										<Form.Control
											type="password"
											placeholder="Ingrese contraseña"
										/>
									</FloatingLabel>
								</div>
								<div className="col-md-6">
									<FloatingLabel
										controlId="floatingConfirmPassword"
										label="Confirmar contraseña"
									>
										<Form.Control
											type="password"
											placeholder="Imgrese contraseña"

										/>
									</FloatingLabel>
								</div>
								<div className="col-md-12 mt-3">
									<Form.Select aria-label="Tipo">
										<option disabled selected>
											SELECCIONAR ROL
										</option>
									</Form.Select>
								</div>
							</div>
						</div>
					</section>
				</CModalBody>
				<CModalFooter>
					<CButton color="secondary" onClick={() => setVisible(false)}>cancelar</CButton>
					<CButton onClick={submitToggle} className="btn-update">actualizar usuario</CButton>
				</CModalFooter>
			</CModal>
		</>
	);
};
