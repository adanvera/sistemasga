import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../context/DataContext'
import myLogo from '../images/iconwhite.png'
import SidebarLi from './SidebarLi'
const urlRoles = "http://localhost:4000/api/role/"

function Sidebar({ rol }) {

	const navigate = useNavigate()
	const { user, currentScreen, setCurrentScreen } = useContext(DataContext)
	const [role, setRole] = useState([])
	const [roleAuth, setRoleAuth] = useState([])

	//funcion para cerrar sesion
	const logout = () => {
		localStorage.clear()
		navigate('/')
	}

	//obtenemos el listado de roles
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

		const data = localStorage.getItem('auth')
		if (!data) {
			localStorage.setItem('auth', JSON.stringify(user))
			setRoleAuth(user.usuarioEncontrado.roleAuth)
			return
		}
		const usuarioAuth = JSON.parse(data);
		setRoleAuth(usuarioAuth.usuarioEncontrado.rol)
	}, [])

	return (
		<>
			<div className="sidebar border-end bg-white" id="sidebar-wrapper">
				<div className=" sidebar-heading border-bottom pb-2">
					<img src={myLogo} alt="" />
				</div>
				<div className="list-group list-group-flush">
					<ul className="list-unstyled">
						<SidebarLi/>
					</ul>
				</div>
				<div className="bottom-side-menu">
					<ul className="list-unstyled">
						<li className="nav-item">
							<a href="" className="nav-link crr" onClick={logout}>
								<ion-icon name="power" className="pt-1"></ion-icon>
								<span className="bt-cerrar" >{' '}Cerrar sesion{' '}</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Sidebar
