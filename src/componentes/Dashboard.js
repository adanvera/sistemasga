import React, { useContext, useEffect, useState } from 'react'
import {Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../context/DataContext'
import Sidebar from './Sidebar'
import Proyects from './Proyects'
import Seguridad from './Seguridad'
import Desarrollo from './Desarrollo'
const urlRoles = "http://localhost:4000/api/role/"



export const Dashboard = () => {
	const {user,currentScreen} = useContext(DataContext)
	const [nombre,setNombre] = useState('')	
	const [role, setRole] = useState([])
	const navigate = useNavigate()
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

	console.log(role);

  	const logout = ()=>{
		localStorage.clear()
    navigate('/')
  }
	return (
		<>
			<Container fluid={true} className="d-flex p-0 m-0">
				<Sidebar rol={role}/>
				<Container  fluid={true} id="dash" rol={role}>
					{/* <Navbar/> */}
					{	currentScreen.proyectos && <Proyects rol={role}/>}
					{	currentScreen.desarrollo && <Desarrollo rol={role}/>}
					{	currentScreen.seguridad&& <Seguridad rol={role}/>}
				</Container>
			</Container>
		</>
	)
}
