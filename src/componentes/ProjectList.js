import React from 'react';
import { Table } from 'react-bootstrap';
import myphoto from '../images/perfil.png'
import { Link } from 'react-router-dom';
import { ProjectsTable } from './partials/ProjectsTable';


function ProjectList({rol}) {

    return (
    <div className='row pt-5'>
        <div className='col-md-12' id='tablelist'>
          <Table responsive="md" className={rol === 'ADMIN' ? '' : ''}>
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
              <ProjectsTable/>
            </tbody>
          </Table>
        </div>
      </div>
  );
}

export default ProjectList;
