import React, { useContext, useEffect, useState } from 'react'
import {Container, Form,FormControl, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../context/DataContext'


import Navbar from './Navbar'
import Sidebar from './Sidebar'
import DetailsProject from './DetailsProject'



export const Dashboard = () => {
	const {user} = useContext(DataContext)
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
					<DetailsProject/>
				</Container>
			</Container>
		</>
	)
}
