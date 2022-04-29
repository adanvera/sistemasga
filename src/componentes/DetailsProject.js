import React, { useContext, useEffect, useState } from 'react';
import { Container, Form, FormControl, Button, FloatingLabel } from 'react-bootstrap'
import EditProject from './partials/EditProject';
import DisplayUserPr from './DisplayUserPr';
import { CButton } from '@coreui/react';
import CreateUs from './partials/CreateUs';
import BacklogList from './partials/BacklogList';
import { DataContext } from '../context/DataContext';



function DetailsProject({ proyecto }) {

	//variable declarada para saber cual es la ventana actual mediante botones
	const [currentScreen, setCurrentScreen] = useState({ prEdit: false, prDetails: true, usTask: false })
	const [userDisplayProject, setUserDisplay] = useState('')
	const usersProject = useState(proyecto.usuarios)
	const usersSelected = usersProject[0]
	const [tasksBk, setTasksBk] = useState('')
	const idPr = proyecto._id

	const [UrlBkLog, setBkLog] = useState('http://localhost:4000/api/user-story/obtener-us-backlog/' + idPr)

	const [usListBlg, setUsListBlgo] = useState("http://localhost:4000/api/user-story/obtener-us-backlog/" + idPr)
	const [roleAuth, setRoleAuth] = useState([])
	const { user, setUser } = useContext(DataContext)

	useEffect(() => {

		const data = localStorage.getItem('auth')
		if (!data) {
			localStorage.setItem('auth', JSON.stringify(user))
			setRoleAuth(user.usuarioEncontrado.roleAuth)
			return
		}
		const usuarioAuth = JSON.parse(data);
		setRoleAuth(usuarioAuth.usuarioEncontrado.rol)

		const getUsBk = async () => {
			try {
				const res = await fetch(UrlBkLog),
					data = await res.json()
				setTasksBk(data.us)
			} catch (error) {
				console.log(error);
			}
		}
		getUsBk()
	}, [])

	const sizeUS = tasksBk.length
	



	return (
		<>
			<Container fluid={true} id="headdash" className='mt-3'>
			</Container>
			{currentScreen.prDetails &&
				<Container fluid={true} className="mt-5" >
					<div className='row o-t d-flex'>
						<div className=''><h4>{proyecto.nombre}</h4></div>
						<div className='' onClick={() => setCurrentScreen({ ...currentScreen, prEdit: true, prDetails: false, usTask: false })} ><ion-icon name="construct-outline"></ion-icon></div>
					</div>
					<div className='row box-dashboard-head p5co'>
						<div className='col-md-8 box-users d-flex'>
							{usersSelected.map((object) => {
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
						<div className='col-md-12'>
							<div className='box-dashboard'>
								<div className='title-section'>
									<span>BACKLOG {sizeUS}</span>
								</div>
								<div className='row' id='createUS'> <CButton onClick={() => setCurrentScreen({ ...currentScreen, prEdit: false, prDetails: true, usTask: true })} className='createUS'>Crear tarea</CButton> </div>

								{currentScreen.usTask && <CreateUs proyecto={proyecto} />}

								{tasksBk.length > 0 &&
									<>
										{tasksBk.map((us) => {
											return <BacklogList tasksBk={us} proyecto={proyecto} />
										})}
									</>
								}
							</div>
							
						</div>
					</div>
				</Container>
			}
			{currentScreen.prEdit && <EditProject proyecto={proyecto} />}
		</>
	);
}

export default DetailsProject;
