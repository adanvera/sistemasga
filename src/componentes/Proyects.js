import React from 'react';
import { Container, Form, FormControl, Button, Table} from 'react-bootstrap';

import myphoto from '../images/perfil.png'

function Proyects() {
  return (
    <Container fluid={true} className="mt-5" id='proyects'>
      <div className='row'>
        <div className='col pb-2'>
          <h4>PROYECTOS</h4>
        </div>
        <div className='col a-end'>
          <button className='btn btn-cr-pro' type="">crear proyecto</button>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4 form-search'>
					<Form className="d-flex">
						<FormControl type="search" placeholder="Buscar proyecto" className="me-2" aria-label="Search"/>
						<Button variant="outline-success"><ion-icon name="search-outline"></ion-icon></Button>
					</Form>
			  </div>
      </div>
      <div className='row pt-5'>
        <div className='col-md-12'>
          <Table responsive="md">
            <thead>
              <tr>
                <th>#</th>
                <th>nombre</th>
                <th>clave</th>
                <th>tipo</th>
                <th>responsable</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>REGISTRO SISTEMA</td>
                <td>RS</td>
                <td>GESTION DE USUARIOS</td>
                <td className='d-flex'>
                  <div className='icon-profile-project'>
                    <img src={myphoto} alt="" />
                  </div>
                  <span className='sp-name'>Fulano</span>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>REGISTRO SISTEMA</td>
                <td>RS</td>
                <td>GESTION DE USUARIOS</td>
                <td className='d-flex'>
                  <div className='icon-profile-project'>
                    <img src={myphoto} alt="" />
                  </div>
                  <span className='sp-name'>Fulano</span>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
}

export default Proyects;
