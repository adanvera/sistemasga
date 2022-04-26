import React, { useState } from 'react';
import { Container, Form, FormControl, Button, FloatingLabel } from 'react-bootstrap'
import user_one from '../images/users/user_one.png'
import user_two from '../images/users/user_two.png'
import user_three from '../images/users/user_three.png'
import user_four from '../images/users/user_four.png'
import EditProject from './partials/EditProject';
import DisplayUserPr from './DisplayUserPr';
import { CButton } from '@coreui/react';
import CreateUs from './partials/CreateUs';




function DetailsProject({ proyecto }) {

	//variable declarada para saber cual es la ventana actual mediante botones
	const [currentScreen, setCurrentScreen] = useState({ prEdit: false, prDetails: true, usTask: false })

	const [userDisplayProject, setUserDisplay] = useState('')
	const usersProject = useState(proyecto.usuarios)
	const usersSelected = usersProject[0]

	return (
		<>
			<Container fluid={true} id="headdash" className='mt-3'>
			</Container>
			{currentScreen.prDetails &&
				<Container fluid={true} className="mt-5" >
					<div className='row o-t d-flex'>
						<div className=''><h1>{proyecto.nombre}</h1></div>
						<div className='' onClick={() => setCurrentScreen({ ...currentScreen, prEdit: true, prDetails: false, usTask:false})} ><ion-icon name="construct-outline"></ion-icon></div>
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
									<span>BACKLOG 1</span>
								</div>
								<div className='row' id='createUS'> <CButton  onClick={() => setCurrentScreen({ ...currentScreen, prEdit: false, prDetails: true, usTask:true})} className='createUS'>Crear tarea</CButton> </div>

								{currentScreen.usTask && <CreateUs proyecto={proyecto}/>}
								
								<div className='box-status-content'>
									<div className='row paddd'>
										<div className='col'>
											<div className='user-pic'>
												<img src={user_one} alt="" />
												<span className='pl-1' >Adán Vera</span>
											</div>
										</div>

									</div>
									<div className='row paddd'>
										<div className='text-description'>
											<span>Desarrollo Front- End de Login, basado en diseño de prototipo hecho</span>
										</div>
									</div>
									<div className='row paddd'>
										<div className='col'>
											<div className='foot-box-task'>
												<span className="number-task">PR-345 [Banca web]</span>
											</div>
										</div>
										<div className='col commet-icon'>
											<div>
												<ion-icon name="chatbox-outline"></ion-icon>
											</div>
										</div>
									</div>
								</div>
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
