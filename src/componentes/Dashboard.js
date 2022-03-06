import React, { useContext, useEffect, useState } from 'react'
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,Container, Form,FormControl, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../context/DataContext'
import myLogo from '../images/iconwhite.png'
import myphoto from '../images/perfil.png'




import user_one from '../images/users/user_one.png'
import user_two from '../images/users/user_two.png'
import user_three from '../images/users/user_three.png'
import user_four from '../images/users/user_four.png'

export const Dashboard = () => {
	const {user} = useContext(DataContext)
	const [nombre,setNombre] = useState('')	
	const navigate = useNavigate()


	//consultamos el localStorage
	useEffect(()=>{
		const data = localStorage.getItem('auth')
		if(!data ){
			console.log(user.usuarioEncontrado);
			setNombre(user.usuarioEncontrado.nombre)
			localStorage.setItem('auth',JSON.stringify(user))
			return
		}
		const usuario = JSON.parse(data);
		setNombre(usuario.usuarioEncontrado.nombre);
	},)

  const logout = ()=>{
		localStorage.clear()
    navigate('/',{replace:true})
  }
	return (
		<>
			<Container fluid={true} className="d-flex p-0 m-0">
				<div class="sidebar border-end bg-white" id="sidebar-wrapper">
					<div class=" sidebar-heading border-bottom"><img src={myLogo} alt="" /></div>
					<div class="list-group list-group-flush mb-auto">
						<a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Proyecto</a>
						<a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Desarrollo</a>
						<a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Seguridad</a>
					</div>
					<div>	
						<span className="bt-cerrar" onClick={logout}>Cerrar sesion <ion-icon name="power" className="pt-1"></ion-icon></span>
					</div>
				</div>
				{/* <div className="sidebar p-1 pl-5 d-flex flex-column" >
					<div className='mb-auto'>
						<Navbar.Brand href="#home">
							<img src={myLogo} alt="" />
						</Navbar.Brand>
					</div>
					<div>	
						<span className="bt-cerrar" onClick={logout}>Cerrar sesion <ion-icon name="power" className="pt-1"></ion-icon></span>
					</div>
				</div> */}
				<Container  fluid={true} id="dash">
					<div className="navbar justify-content-between w-100 p-0" variant="dark">
						<Nav className="items">
							<ion-icon name="reorder-three-outline"></ion-icon>
							<Nav.Link href="#home">Inicio</Nav.Link>
							<Nav.Link href="#features">Proyectos</Nav.Link>
							<Nav.Link href="#pricing">Item 3</Nav.Link>
						</Nav>
						<Nav className="">
							<Nav.Link href="#pricing" className="d-flex">
								<div className="t-a">
									<p className="p-style fw-100">Bienvenido</p>
									<span className='username'>{nombre}</span>
								</div>
								<div className="pl">
									<img src={myphoto} alt="" />
								</div>
							</Nav.Link>
						</Nav>
					</div>
					<Container fluid={true} id="headdash" className='mt-3'>
						<div className='row o-t'>
							<span>Tablero</span>
							<h1>Nombre del proyecto</h1>
						</div>
						<div className='row box-dashboard-head p5co'>
							<div className='col box-users d-flex'>
								<div className='user'>
									<img src={user_one} alt="" />
								</div>
								<div className='user'>
									<img src={user_two} alt="" />
								</div>
								<div className='user'>
									<img src={user_three} alt="" />
								</div>
								<div className='user'>
									<img src={user_four} alt="" />
								</div>
							</div>
							<div className='col filters d-flex'>
								<div className='col-md-4 pr-1'>
									<Form.Select aria-label="Filtrar por">
										<option>Selccionar filtro</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</Form.Select>
								</div>
								<div className='col-md-4'>
									<Form.Select aria-label="Tipo">
										<option>Selccionar filtro</option>
										<option value="1">One</option>
										<option value="2">Two</option>
										<option value="3">Three</option>
									</Form.Select>
								</div>
							</div>
							<div className='col form-search'>
								<Form className="d-flex">
									<FormControl
										type="search"
										placeholder="Buscar"
										className="me-2"
										aria-label="Search"
									/>
									<Button variant="outline-success"><ion-icon name="search-outline"></ion-icon></Button>
								</Form>
							</div>
						</div>
					</Container>
					<Container fluid={true} className="mt-5" >
						<div className='row  justify-content-center'> 
							<div className='col-md-3'> 
								<div className='box-dashboard'> 

								</div>
							</div>
							<div className='col-md-3'> 
								<div className='box-dashboard'> 
									
								</div>
							</div>
							<div className='col-md-3'> 
								<div className='box-dashboard'> 
									
								</div>
							</div>
							<div className='col-md-3'> 
								<div className='box-dashboard'> 
									
								</div>
							</div>
						</div>
					</Container>
				</Container>
			</Container>
		</>
	)
}
