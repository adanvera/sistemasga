import React from 'react';
import { Table } from 'react-bootstrap';
import myphoto from '../images/perfil.png'
import { Link } from 'react-router-dom';


function ProjectList() {
    return (
    <div className='row pt-5'>
        <div className='col-md-12' id='tableprojectlist'>
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
                <td><Link to="./DetailsProject">REGISTRO SISTEMA</Link></td>
                <td>RS</td>
                <td>GESTION DE USUARIOS</td>
                <td className='d-flex'>
                  <div className='icon-profile-project'>
                    <img src={myphoto} alt="" />
                  </div>
                  <span className='sp-name'>Nombre de responsable</span>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
  );
}

export default ProjectList;
