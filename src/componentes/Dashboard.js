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
					<div class=" sidebar-heading border-bottom pb-2"><img src={myLogo} alt="" /></div>
					<div class="list-group list-group-flush">
						<ul class="list-unstyled">
							<li>
								<a class="list-group-item list-group-item-action p-3 active" href="#!"> <ion-icon name="grid-outline" ></ion-icon> <span className="p-2"> Proyecto</span> </a>
							</li>
							<li>
								<a class="list-group-item list-group-item-action p-3" href="#!"> <ion-icon name="git-compare-outline"></ion-icon> <span className="p-2">Desarrollo</span> </a>
							</li>
							<li>
								<a class="list-group-item list-group-item-action p-3" href="#!"> <ion-icon name="finger-print-outline"></ion-icon> <span className="p-2">Seguridad</span> </a>
							</li>
						</ul>
					</div>
					<div class="bottom-side-menu">
						<ul class="list-unstyled">
							<li class="nav-item">
								<a href="" class="nav-link">
									<span className="bt-cerrar" onClick={logout}> <ion-icon name="power" className="pt-1"></ion-icon> Cerrar sesion </span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<Container  fluid={true} id="dash">
					<div className="navbar justify-content-between w-100 " variant="dark">
						<Nav className="items">
							<ion-icon name="reorder-three-outline"></ion-icon>
							<Nav.Link href="#home">Inicio</Nav.Link>
							<Nav.Link href="#proyectos">Proyectos</Nav.Link>
							<Nav.Link href="#newproject" className='createnewproject mt-1'>crear</Nav.Link>
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
							<div className='col-md-8 box-users d-flex'>
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
								<div id="cia-user">
									<span>+8</span>
								</div>
								<div className='col filters d-flex'>
									<div className='col-md-3 pr-1'>
										<Form.Select aria-label="Filtrar por">
											<option>Selccionar filtro</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</Form.Select>
									</div>
									<div className='col-md-3'>
										<Form.Select aria-label="Tipo">
											<option>Selccionar filtro</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</Form.Select>
									</div>
								</div>
							</div>
							
							<div className='col-md-4 form-search'>
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
						<div className='row justify-content-between'> 
							<div className='col-md-3'> 
								<div className='box-dashboard'>
									<div className='title-section'>
										<span>POR HACER</span>
									</div>
									<div className='box-status-content'>
										<div className='row paddd'>
											<div className='col'>
												<div className='user-pic'>
													<img src={user_one} alt=""/>
												</div>
											</div>
											<div className='col ord'>
												<div className='priority'>
													<span>ALTA</span>
												</div>
											</div>
										</div>
										<div className='row paddd'>
											<div className='text-description'>
												<span>Desarrollo Front- End de Login, basado en diseño de prototipo hecho</span>
											</div>
										</div>
										<div className='row paddd'>
											<div className='col'>
												<div className='foot-box-task'>
													<span className="number-task">PR-345 [Banca web]</span>
												</div>
											</div>
											<div className='col commet-icon'>
												<div>
													<ion-icon name="chatbox-outline"></ion-icon>
												</div>
											</div>
										</div>
									</div>
									<div className='box-status-content'>
										<div className='row paddd'>
											<div className='col'>
												<div className='user-pic'>
													<img src={user_one} alt=""/>
												</div>
											</div>
											<div className='col ord'>
												<div className='priority'>
													<span>ALTA</span>
												</div>
											</div>
										</div>
										<div className='row paddd'>
											<div className='text-description'>
												<span>Desarrollo Front- End de Login, basado en diseño de prototipo hecho</span>
											</div>
										</div>
										<div className='row paddd'>
											<div className='col'>
												<div className='foot-box-task'>
													<span className="number-task">PR-345 [Banca web]</span>
												</div>
											</div>
											<div className='col commet-icon'>
												<div>
													<ion-icon name="chatbox-outline"></ion-icon>
												</div>
											</div>
										</div>
									</div>
									<div className='box-status-content'>
										<div className='row paddd'>
											<div className='col'>
												<div className='user-pic'>
													<img src={user_one} alt=""/>
												</div>
											</div>
											<div className='col ord'>
												<div className='priority'>
													<span>ALTA</span>
												</div>
											</div>
										</div>
										<div className='row paddd'>
											<div className='text-description'>
												<span>Desarrollo Front- End de Login, basado en diseño de prototipo hecho</span>
											</div>
										</div>
										<div className='row paddd'>
											<div className='col'>
												<div className='foot-box-task'>
													<span className="number-task">PR-345 [Banca web]</span>
												</div>
											</div>
											<div className='col commet-icon'>
												<div>
													<ion-icon name="chatbox-outline"></ion-icon>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='col-md-3'> 
								<div className='box-dashboard'>
									<div className='title-section revision'>
										<span>EN REVISION</span>
									</div>
									<div className='data'>
										<div>
											<ion-icon name="alert-circle-outline"></ion-icon>
										</div>
										<span>
											sin registros
										</span>
									</div>
								</div>
							</div>
							<div className='col-md-3'> 
								<div className='box-dashboard'>
									<div className='title-section en-curso'>
										<span>EN CURSO</span>
									</div>
									<div className='data'>
										<div>
											<ion-icon name="alert-circle-outline"></ion-icon>
										</div>
										<span>
											sin registros
										</span>
									</div>
								</div>
							</div>
							<div className='col-md-3'> 
								<div className='box-dashboard'>
									<div className='title-section finalizado'>
										<span>FINALIZADO</span>
									</div>
									<div className='data'>
										<div>
											<ion-icon name="alert-circle-outline"></ion-icon>
										</div>
										<span>
											sin registros
										</span>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</Container>
			</Container>
		</>
	)
}
