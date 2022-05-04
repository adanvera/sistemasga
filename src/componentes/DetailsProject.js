import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Form, FormControl } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { URL_PROYECTOS } from '../helpers/endPoints';


function DetailsProject() {

	//obtenemos el id del proyecto mediante la siguiente función
	const { id } = useParams()

	const { user } = useContext(DataContext)
	const [nombre, setNombre] = useState('')
	const [apellido, setApellido] = useState('')
	const [descripcion, setDescripcion] = useState('')
	const [proyecto, setProyecto] = useState([])



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
				const res = await fetch(URL_PROYECTOS+id),
					data = await res.json()
				setProyecto(data.proyectos)
			} catch (error) {
				console.log(error);
			}
		}
	}, [])

	console.log(proyecto);


	return (
		<>
			<Container fluid={true}>
				<Container fluid={true} id="headdash" className='mt-3'>
				</Container>
				<Container fluid={true} className="mt-5" >
					<div className='row o-t d-flex'>
						{/* <div className=''><h4>{projectDetails?.nombre}</h4></div> */}
						{/* <div className='' onClick={() => setCurrentScreen({ ...currentScreen, prEdit: true, prDetails: false, usTask: false })} ><ion-icon name="construct-outline"></ion-icon></div> */}
					</div>
					<div className='row box-dashboard-head p5co'>
						<div className='col-md-8 box-users d-flex'>
							{/* {usersSelected.map((object) => {
							return <DisplayUserPr object={object} />
						})} */}
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
						<div className='col-md-12'>
							<div className='box-dashboard'>
								<div className='title-section'>
									<span>BACKLOG 1</span>
								</div>
								{/* <div className='row' id='createUS'> <CButton onClick={() => setCurrentScreen({ ...currentScreen, prEdit: false, prDetails: true, usTask: true })} className='createUS'>Crear tarea</CButton> </div> */}
								{/* 
							{currentScreen.usTask && <CreateUs proyecto={proyecto} />}

							<BacklogList tasksBk={tasksBk} proyecto={proyecto} /> */}

							</div>
						</div>
					</div>
				</Container>
			</Container>
		</>
	)
}

export default DetailsProject