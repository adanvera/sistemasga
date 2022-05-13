import { CButton } from '@coreui/react';
import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form, FormControl } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { URL_BACKLOG, URL_PROYECTOS, URL_US_DETENIDO, URL_US_EN_CURSO } from '../helpers/endPoints';
import DisplayUserPr from './DisplayUserPr';
import BacklogList from '../componentes/partials/BacklogList'
import EditProject from '../componentes/partials/EditProject'
import CreateUs from '../componentes/partials/CreateUs'
import { useNavigate } from 'react-router-dom'
import myLogo from '../images/iconwhite.png'
import EnCursoList from './partials/EnCursoList';
import DetenidosList from './partials/DetenidosList';

function DetailsProject() {

	//obtenemos el id del proyecto mediante la siguiente función
	const { id } = useParams()
	console.log(id);
	//variable declarada para saber cual es la ventana actual mediante botones
	const [currentScreen, setCurrentScreen] = useState({ prEdit: false, prDetails: true, usTask: false })
	const { user } = useContext(DataContext)
	const [nombre, setNombre] = useState('')
	const [apellido, setApellido] = useState('')
	const [descripcion, setDescripcion] = useState('')
	const [proyecto, setProyecto] = useState([])
	const [tasksBk, setTasksBk] = useState('')
	const [taskEnCurso, setTaskEnCurso] = useState('')
	const [role, setRole] = useState([])
	const [taskDetenido, setTaskDetenido] = useState('')

	//consultamos el localStorage
	useEffect(() => {
		const data = localStorage.getItem('auth')
		if (!data) {
			setNombre(user.usuarioEncontrado.nombre)
			localStorage.setItem('auth', JSON.stringify(user));
			setApellido(user.usuarioEncontrado.apellido)
			setRole(user.usuarioEncontrado.role)
			localStorage.setItem('auth', JSON.stringify(user))
			return
		}
		const usuario = JSON.parse(data);
		setNombre(usuario.usuarioEncontrado.nombre);
		setApellido(usuario.usuarioEncontrado.apellido);
		setRole(usuario.usuarioEncontrado.rol)

		const getProject = async () => {
			try {
				const res = await fetch(URL_PROYECTOS + id),
					data = await res.json()
				setProyecto(data)
			} catch (error) {
				console.log(error);
			}
		}

		getProject()

		const getUsBk = async () => {
			try {
				const res = await fetch(URL_BACKLOG + id),
					data = await res.json()
				setTasksBk(data.us)
			} catch (error) {
				console.log(error);
			}
		}
		getUsBk()

		const getUsEnCurso = async ()=>{
			try {
				const res = await fetch(URL_US_EN_CURSO+id),
				data = await res.json()
				setTaskEnCurso(data.us)
			} catch (error) {
				console.log(error);
			}
		}
		getUsEnCurso()

		const getUsDetenido = async ()=>{
			try {
				const res = await fetch(URL_US_DETENIDO+id),
				data = await res.json()
				setTaskDetenido(data.us)
			} catch (error) {
				console.log(error)
			}
		}
		getUsDetenido()

	}, [])

	console.log(taskDetenido);

	//capturamos los datos del proyecto en la siguiente variable
	const dataProject = proyecto?.proyecto
	const usuersProject = proyecto?.proyecto?.usuarios

	const navigate = useNavigate()
	//funcion para cerrar sesion
	const logout = () => {
		localStorage.clear()
		navigate('/')
	}

	return (
		<>
			<Container fluid={true} className="d-flex p-0 m-0">
				<div className="sidebar border-end bg-white" id="sidebar-wrapper">
					<div className=" sidebar-heading border-bottom pb-2">
						<img src={myLogo} alt="" />
					</div>
					<div className="list-group list-group-flush">
						<ul className="list-unstyled">
							<li>
								<Link to="../"
									className="list-group-item list-group-item-action p-3"
								>
									<ion-icon name="grid-outline"></ion-icon>{' '}
									<span className="p-2">Proyecto</span>{' '}
								</Link>
							</li>
							<li>
								<button className="list-group-item list-group-item-action p-3"
									onClick={(e) =>
										setCurrentScreen({ ...currentScreen, desarrollo: true, proyectos: false, seguridad: false })
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
										setCurrentScreen({ ...currentScreen, seguridad: true, proyectos: false, desarrollo: false })
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
				<Container fluid={true} id="dash" rol={role} className="mt-5" >
					<div className='row o-t d-flex'>
						<div></div>
						<div className='d-flex justify-content-between mll'><h4 className='data-name'>{dataProject?.nombre ? dataProject?.nombre : ''}</h4><div onClick={() => setCurrentScreen({ ...currentScreen, prEdit: true, prDetails: false, usTask: false })} className='aflex-details'><ion-icon name="construct-outline"></ion-icon><p>Ajustes</p></div></div>
					</div>
					<div className='row box-dashboard-head p5co ml-3'>
						<div className='col-md-8 box-users d-flex'>
							{usuersProject?.map((object) => {
								return <DisplayUserPr object={object} />
							})}
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
					<div className='row justify-content-between' id='tablero'>
						{currentScreen.prDetails &&
							<>
								<div className='col-md-12 d-flex'>
									<div className=' col-md box-dashboard'>
										<div className='title-section'>
											<span>BACKLOG {tasksBk.length}</span>
										</div>
										<div className='row' id='createUS'> <CButton onClick={() => setCurrentScreen({ ...currentScreen, prEdit: false, prDetails: true, usTask: true })} className='createUS'>Crear tarea</CButton> </div>

										{currentScreen?.usTask && <CreateUs dataProject={dataProject} />}

										{tasksBk.length > 0 && tasksBk.map((item => {
											return <BacklogList item={item} dataProject={dataProject} />
										}))
										}

									</div>
									<div className=" col-md box-dashboard">
										<div className='title-section'>
											<span>EN CURSO {taskEnCurso.length}</span>
										</div>
										{taskEnCurso.length > 0 && taskEnCurso.map((item => {
											return <EnCursoList item={item} dataProject={dataProject} />
										}))
										}
									</div>
									<div className=" col-md box-dashboard">
										<div className='title-section'>
											<span>DETENIDO {taskDetenido.length}</span>
										</div>
										{taskDetenido.length > 0 && taskDetenido.map((item => {
											return <DetenidosList item={item} dataProject={dataProject} />
										}))
										}
									</div>
								</div>
							</>
						}
					</div>

					{currentScreen.prEdit && <EditProject dataProject={dataProject} />}


				</Container>

			</Container>
		</>
	)
}

export default DetailsProject