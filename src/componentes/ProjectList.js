import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProjectsTable } from './partials/ProjectsTable';
import { URL_PROYECTOS } from '../helpers/endPoints';



function ProjectList({ proyecto }) {
  return (
    <>
      <div className='row pt-5'>
        <div className='col-md-12' id='tablelist'>
          <Table responsive="md">
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
