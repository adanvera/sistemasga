import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataContext } from '../context/DataContext'
import myLogo from '../images/iconwhite.png'

function Sidebar() {
	const navigate = useNavigate()
	const { currentScreen, setCurrentScreen } = useContext(DataContext)
	const logout = () => {
		localStorage.clear()
		navigate('/')
	}

	return (
		<>
			<div className="sidebar border-end bg-white" id="sidebar-wrapper">
				<div className=" sidebar-heading border-bottom pb-2">
					<img src={myLogo} alt="" />
				</div>
				<div className="list-group list-group-flush">
					<ul className="list-unstyled">
						<li>
							<button
								className="list-group-item list-group-item-action p-3"
								onClick={(e) =>
									setCurrentScreen({ ...currentScreen, proyectos: true,seguridad:false,desarrollo:false })
								}
							>
								<ion-icon name="grid-outline"></ion-icon>{' '}
								<span className="p-2">Proyecto</span>{' '}
							</button>
						</li>
						<li>
							<button className="list-group-item list-group-item-action p-3"
								onClick={(e) =>
									setCurrentScreen({ ...currentScreen, desarrollo: true,proyectos:false,seguridad:false })
								}
							>
								{' '}
								<ion-icon name="git-compare-outline"></ion-icon>{' '}
								<span className="p-2">Desarrollo</span>{' '}
							</button>
						</li>
						<li>
							<button className="list-group-item list-group-item-action p-3"
							onClick={(e) =>
								setCurrentScreen({ ...currentScreen, seguridad: true,proyectos:false,desarrollo:false })
							}>
								<ion-icon name="finger-print-outline"></ion-icon>{' '}
								<span className="p-2">Seguridad</span>{' '}
							</button>
						</li>
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
