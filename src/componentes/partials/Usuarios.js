import React from 'react'
import UsersLists from '../UsersLists';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Container, Button, Modal} from 'react-bootstrap';

export const Usuarios = ({ usuario }) => {
	return (
		<>
			<div className="row">
				<div className="col-md-4 form-search">
					<Form className="d-flex">
						<FormControl
							type="search"
							placeholder="Buscar usuario"
							className="me-2"
							aria-label="Search"
						/>
						<Button variant="outline-success">
							<ion-icon name="search-outline"></ion-icon>
						</Button>
					</Form>
				</div>
			</div>
			{usuario.length > 0 && <UsersLists usuario={usuario} />}
		</>
	)
}
