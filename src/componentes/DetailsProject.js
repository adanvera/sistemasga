import { CButton } from '@coreui/react';
import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form, FormControl } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { URL_BACKLOG, URL_PROYECTOS } from '../helpers/endPoints';
import DisplayUserPr from './DisplayUserPr';
import BacklogList from '../componentes/partials/BacklogList'
import EditProject from '../componentes/partials/EditProject'
import CreateUs from '../componentes/partials/CreateUs'



function DetailsProject() {

	//obtenemos el id del proyecto mediante la siguiente función
	const { id } = useParams()
	//variable declarada para saber cual es la ventana actual mediante botones
	const [currentScreen, setCurrentScreen] = useState({ prEdit: false, prDetails: true, usTask: false })
	const { user } = useContext(DataContext)
	const [nombre, setNombre] = useState('')
	const [apellido, setApellido] = useState('')
	const [descripcion, setDescripcion] = useState('')
	const [proyecto, setProyecto] = useState([])
	const [tasksBk, setTasksBk] = useState('')

	//consultamos el localStorage
	useEffect(() => {
		const data = localStorage.getItem('auth')
		if (!data) {
			setNombre(user.usuarioEncontrado.nombre)
			localStorage.setItem('auth', JSON.stringify(user));
			setApellido(user.usuarioEncontrado.apellido)
			localStorage.setItem('auth', JSON.stringify(user))
			return
		}
		const usuario = JSON.parse(data);
		setNombre(usuario.usuarioEncontrado.nombre);
		setApellido(usuario.usuarioEncontrado.apellido);

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

	}, [])
	//capturamos los datos del proyecto en la siguiente variable
	const dataProject = proyecto?.proyecto
	const usuersProject = proyecto?.proyecto?.usuarios

	return (
		<>
			<Container fluid={true}>
				<Container fluid={true} id="headdash" className='mt-3'>
					
				</Container>

				<Container fluid={true} className="mt-5" >
					<div className='row o-t d-flex'>
						<div></div>
						<div className='d-flex justify-content-between mll'><Link to="../"><ion-icon className="" name="home-outline"></ion-icon></Link><h4>{dataProject?.nombre ? dataProject?.nombre : ''}</h4></div>
						<div className='' onClick={() => setCurrentScreen({ ...currentScreen, prEdit: true, prDetails: false, usTask: false })} ><ion-icon name="construct-outline"></ion-icon></div>
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
								<div className='col-md-12'>
									<div className='box-dashboard'>
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