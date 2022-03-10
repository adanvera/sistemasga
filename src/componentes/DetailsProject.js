import React from 'react';
import { Container, Form,FormControl, Button} from 'react-bootstrap'


import user_one from '../images/users/user_one.png'
import user_two from '../images/users/user_two.png'
import user_three from '../images/users/user_three.png'
import user_four from '../images/users/user_four.png'

function DetailsProject() {
  return (
    <>
        <Container fluid={true} id="headdash" className='mt-3'>
						<div className='row o-t'>
							<span>Tablero</span>
							<h1>Nombre del proyecto</h1>
						</div>
						<div className='row box-dashboard-head p5co'>
							<div className='col-md-8 box-users d-flex'>
								<div className='user'>
									<img src={user_one} alt="" />
								</div>
								<div className='user'>
									<img src={user_two} alt="" />
								</div>
								<div className='user'>
									<img src={user_three} alt="" />
								</div>
								<div className='user'>
									<img src={user_four} alt="" />
								</div>
								<div id="cia-user">
									<span>+8</span>
								</div>
								<div className='col filters d-flex'>
									<div className='col-md-3 pr-1'>
										<Form.Select aria-label="Filtrar por">
											<option>Selccionar filtro</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</Form.Select>
									</div>
									<div className='col-md-3'>
										<Form.Select aria-label="Tipo">
											<option>Selccionar filtro</option>
											<option value="1">One</option>
											<option value="2">Two</option>
											<option value="3">Three</option>
										</Form.Select>
									</div>
								</div>
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
					</Container>
					<Container fluid={true} className="mt-5" >
						<div className='row justify-content-between'> 
							<div className='col-md-3'> 
								<div className='box-dashboard'>
									<div className='title-section'>
										<span>POR HACER</span>
									</div>
                                    <div className='data'>
										<div>
											<ion-icon name="alert-circle-outline"></ion-icon>
										</div>
										<span>
											sin registros
										</span>
									</div>
								</div>
							</div>
							<div className='col-md-3'> 
								<div className='box-dashboard'>
									<div className='title-section revision'>
										<span>EN REVISION</span>
									</div>
									<div className='data'>
										<div>
											<ion-icon name="alert-circle-outline"></ion-icon>
										</div>
										<span>
											sin registros
										</span>
									</div>
								</div>
							</div>
							<div className='col-md-3'> 
								<div className='box-dashboard'>
									<div className='title-section en-curso'>
										<span>EN CURSO</span>
									</div>
									<div className='data'>
										<div>
											<ion-icon name="alert-circle-outline"></ion-icon>
										</div>
										<span>
											sin registros
										</span>
									</div>
								</div>
							</div>
							<div className='col-md-3'> 
								<div className='box-dashboard'>
									<div className='title-section finalizado'>
										<span>FINALIZADO</span>
									</div>
									<div className='data'>
										<div>
											<ion-icon name="alert-circle-outline"></ion-icon>
										</div>
										<span>
											sin registros
										</span>
									</div>
								</div>
							</div>
						</div>
					</Container>
    </>
  );
}

export default DetailsProject;
