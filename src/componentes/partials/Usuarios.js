import React, { useContext, useEffect } from 'react'
import UsersLists from '../UsersLists';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import {  Button, Modal} from 'react-bootstrap';
import { useState } from 'react'
import RegisterUser from '../../modals/RegisterUser';
import { DataContext } from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';



export const Usuarios = ({ usuario,rol }) => {
	function ModalRegister() {
		const [show, setShow] = useState(false);
		
		const handleClose = () => setShow(false);
		const handleShow = () =>{
			if(role === 'ADMIN'){
				setShow(true);
			}else if (role !== 'ADMIN'){
				swal({
					title: "ADVERTENCIA",
					text: "Su rol no tiene permisos para crear un usuario",
					icon: "warning",
					button: "ok",
				  });
			}
		}

		const {user,currentScreen} = useContext(DataContext)
		const [nombre,setNombre] = useState('')	
		const [role, setRole] = useState([])
		const [authuser, setAuth] = useState('')


		//consultamos el localStorage
		useEffect(()=>{
			const data = localStorage.getItem('auth')
			if(!data ){
				setNombre(user.usuarioEncontrado.nombre)
				localStorage.setItem('auth',JSON.stringify(user))
				setRole(user.usuarioEncontrado.role)
				return
			}
			const usuario = JSON.parse(data);
			setNombre(usuario.usuarioEncontrado.nombre);
			setRole(usuario.usuarioEncontrado.rol)		
		},)
	  
		return (
		  <>
			<Button className="btn btn-cr-pro" onClick={handleShow}> <ion-icon name="add-circle-outline"></ion-icon> crear usuario</Button>
	  
			<Modal show={show} onHide={handleClose} >
			  <Modal.Header closeButton>
				<Modal.Title>Registrar usuario</Modal.Title>
			  </Modal.Header>
			  <Modal.Body>
				<RegisterUser/>
			  </Modal.Body>
			</Modal>
		  </>
		);
	}

	const [search, setSearch] = React.useState('');

	const handleSearch = (e)=>{
		setSearch(e.target.value)
		console.log(search);
	}

	return (
		<>
			<div className="row">
				<div className="col-md-12 form-search d-flex">
					<div className='col-md-6'>
					</div>
					<div className='col-md-6 t-a'>
						<ModalRegister />
					</div>
				</div>
			</div>
			{usuario.length > 0 && <UsersLists  usuario={usuario} />}
		</>
	)
}
