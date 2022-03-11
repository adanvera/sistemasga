import React, { useContext, useEffect, useState } from 'react'
import {Container, Form,FormControl, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../context/DataContext'


import Navbar from './Navbar'
import Sidebar from './Sidebar'
import DetailsProject from './DetailsProject'
import Proyects from './Proyects'
import Seguridad from './Seguridad'
import Desarrollo from './Desarrollo'



export const Dashboard = () => {
	const {user,currentScreen} = useContext(DataContext)
	const [nombre,setNombre] = useState('')	
	const navigate = useNavigate()


	//consultamos el localStorage
	useEffect(()=>{
		const data = localStorage.getItem('auth')
		if(!data ){
			setNombre(user.usuarioEncontrado.nombre)
			localStorage.setItem('auth',JSON.stringify(user))
			return
		}
		const usuario = JSON.parse(data);
		setNombre(usuario.usuarioEncontrado.nombre);
	},)

  const logout = ()=>{
		localStorage.clear()
    navigate('/')
  }
	return (
		<>
			<Container fluid={true} className="d-flex p-0 m-0">
				<Sidebar/>
				<Container  fluid={true} id="dash">
					<Navbar/>
				{	currentScreen.proyectos && <Proyects/>}
				{	currentScreen.desarrollo && <Desarrollo/>}
				{	currentScreen.seguridad&& <Seguridad/>}
				</Container>
			</Container>
		</>
	)
}
