import React, { useState } from 'react'
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,Container,} from 'react-bootstrap'
import myLogo from '../images/iconwhite.png'
import myphoto from '../images/perfil.png'

export const Dashboard = () => {
  const logout = ()=>{
    window.location.reload()
  }
	return (
		<>
			<Container fluid={true} className="d-flex p-0 m-0">
				<div className="sidebar p-1 pl-5 d-flex flex-column" >
					<div className='mb-auto'>
						<Navbar.Brand href="#home">
							<img src={myLogo} alt="" />
						</Navbar.Brand>
					</div>
					<div>	
						<span className="bt-cerrar" onClick={logout}>Cerrar sesion <ion-icon name="power" className="pt-1"></ion-icon></span>
					</div>
				</div>
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
								<span>Adan</span>
							</div>
							<div className="pl">
								<img src={myphoto} alt="" />
							</div>
						</Nav.Link>
					</Nav>
				</div>
			</Container>
		</>
	)
}
