import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProjectsTable } from './partials/ProjectsTable';
import { URL_PROYECTOS } from '../helpers/endPoints';



function ProjectList({ proyecto }) {

  //para obtener el listado correspondiente de proyectos
  return (
    <>
      <div className='row pb-5'>
        <h1 className='pt-5'>Proyectos</h1>
        <div className='col-md-12' id='tablelist'>
          <Table responsive="md" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>nombre</th>
                <th>descripcion</th>
                <th>responsable</th>
              </tr>
            </thead>
            <tbody>
              {proyecto.map((proyecto, index) => {
                return <ProjectsTable index={index + 1} proyecto={proyecto} />
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default ProjectList;
