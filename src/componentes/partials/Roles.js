import React, { useState, useEffect, useContext } from "react";

import { Modal, Button } from "react-bootstrap";
import RegisterRole from "../../modals/RegisterRole";
import { FormControl, Form } from "react-bootstrap";
import RoleList from '../RoleList';
import swal from "sweetalert";
import { DataContext } from '../../context/DataContext';
const urlRoles = "http://localhost:4000/api/role/"





export const Roles = ({ rol }) => {

	function ModalRegisterRole() {
		const [show, setShow] = useState(false);
		const { user } = useContext(DataContext)
		const [nombre, setNombre] = useState('')
		const [role, setRole] = useState([])

		//consultamos el localStorage
		useEffect(() => {
			const data = localStorage.getItem('auth')
			if (!data) {
				setNombre(user.usuarioEncontrado.nombre)
				localStorage.setItem('auth', JSON.stringify(user))
				setRole(user.usuarioEncontrado.role)
				return
			}
			const usuario = JSON.parse(data);
			setNombre(usuario.usuarioEncontrado.nombre);
			setRole(usuario.usuarioEncontrado.rol)
		})

		const handleClose = () => setShow(false);
		const handleShow = () => {
			if (role === 'ADMINISTRADOR') {
				setShow(true);
			} else if (role !== 'ADMINISTRADOR') {
				swal({
					title: "ADVERTENCIA",
					text: "Su rol no tiene permisos para crear un rol",
					icon: "warning",
					button: "ok",
				});
			}
		}

		return (
			<>
				<Button onClick={handleShow}
					className="btn btn-cr-pro"
				> <ion-icon name="add-circle-outline"></ion-icon>
					crear rol</Button>

				<Modal show={show} onHide={handleClose} >
					<Modal.Header closeButton>
						<Modal.Title>Registrar rol</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<RegisterRole />
					</Modal.Body>
				</Modal>
			</>
		);
	}

	const [role, setRole] = useState([])
	useEffect(() => {
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

	const [search, setSearch] = React.useState('');

	const handleSearch = (e) => {
		setSearch(e.target.value)
		console.log(search);
	}

	return (
		<>
			<div className="row">
				<div className="col-md-12 form-search d-flex">
					<div className='col-md-6'>
						<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Buscar rol"
								className="me-2"
								aria-label="Search"
								onChange={handleSearch}
							/>
							<Button variant="outline-success">
								<ion-icon name="search-outline"></ion-icon>
							</Button>
						</Form>
					</div>
					<div className='col-md-6 t-a'>
						<ModalRegisterRole />
					</div>
				</div>
			</div>
			{<RoleList roles={role} />}
		</>
	);
}

export default Roles;
