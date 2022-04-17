import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert"
import { DataContext } from "../context/DataContext";
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/react";
import { URL_ELIMINAR_ROL } from "../helpers/endPoints"
import { EditDataRole } from "./partials/EditDataRole";
const urlRoles = "http://localhost:4000/api/role/"



export const Tbodyrol = ({ role: rl, index }) => {

	const [roleAuth, setRoleAuth] = useState([])
	const { user, currentScreen } = useContext(DataContext)
	const [rol, setRoleName] = useState("")
	const [optProyecto, setOptProyecto] = useState("")
	const [optSeguridad, setOptSeguridad] = useState("")
	const [optDesarrollo, setOptDesarrollo] = useState("")
	const [role, setRole] = useState([])
	const options = [
		{ value: 'Proyecto', label: 'Proyecto' },
		{ value: 'Desarollo', label: 'Desarrollo' },
		{ value: 'Seguridad', label: 'Seguridad' },
	];

	//consultamos el localStorage y guardamos valor de rol 
	//para poder filtrar funciones mediante la misma
	useEffect(() => {
		const data = localStorage.getItem('auth')
		if (!data) {
			localStorage.setItem('auth', JSON.stringify(user))
			setRoleAuth(user.usuarioEncontrado.roleAuth)
			return
		}
		const usuarioAuth = JSON.parse(data);
		setRoleAuth(usuarioAuth.usuarioEncontrado.rol)

		const getRole = async () => {
			try {
				const res = await fetch(urlRoles),
					data = await res.json()
				setRole(data.roles)
			} catch (error) {
				console.log(error);
			}
		}
		getRole()

	}, [])

	console.log(role);

	const deleteRol = async () => {
		if (roleAuth === 'ADMIN') {
			const { _id } = rl
			swal({
				title: "¿Estas seguro?",
				text: "Una vez elimnado este rol no se puede revertir",
				icon: "warning",
				buttons: true,
				dangerMode: true,
			})
				.then(async (willDelete) => {
					if (willDelete) {
						await fetch(URL_ELIMINAR_ROL + _id, { method: 'DELETE', headers: { "Content-Type": "application/json" } })
						swal("Rol eliminado exitosamente", {
							icon: "success",
						});
					}
				});
		} else {
			swal({
				title: "ADVERTENCIA",
				text: "Su rol no posee permisos para eliminar roles",
				icon: "warning",
				button: "ok",
			})
		}
	}

	const [visible, setVisible] = useState(false)

	const editRole = async () => {
		if (roleAuth === 'ADMIN') {
			setVisible(!visible)
		} else {
			swal({
				title: "ADVERTENCIA",
				text: "Su rol no posee permisos para eliminar usuarios",
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
				<td>{rl.acceso}</td>
				<td className="d-flex">
					<div className="padright deleteuser">
						<span className="pten" onClick={deleteRol}>
							<ion-icon name="trash-bin-outline"></ion-icon>
						</span>
					</div>
					<div className="padright edituser">
						<CButton className="pten" onClick={editRole}>
							<ion-icon name="options-outline"></ion-icon>
						</CButton>
					</div>
				</td>
			</tr>

			<CModal visible={visible} onClose={() => setVisible(false)}>
				<CModalHeader onClose={() => setVisible(false)}>
					<CModalTitle>Editar rol</CModalTitle>
				</CModalHeader>
				<CModalBody>
					<EditDataRole rl={rl} />
				</CModalBody>
				{/* <CModalFooter>
					<CButton color="secondary" onClick={() => setVisible(false)}>cancelar</CButton>
					<CButton className="btn-update">actualizar rol</CButton>
				</CModalFooter> */}
			</CModal>
		</>
	)
}
