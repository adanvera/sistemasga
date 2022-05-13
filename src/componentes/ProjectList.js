import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProjectsTable } from './partials/ProjectsTable';
import { URL_PROYECTOS } from '../helpers/endPoints';



function ProjectList({ proyecto }) {

  //para obtener el listado correspondiente de proyectos
  return (
    <>
      <div className='row pb-5'>
        <h1 className='pt-5'>PROYECTOS</h1>
        <div className='row mb-5' >
          <div className='col-md-4 form-search'>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Buscar proyecto" className="me-2" aria-label="Search" />
              <Button variant="outline-success"><ion-icon name="search-outline"></ion-icon></Button>
            </Form>
          </div>
        </div>
        <div className='col-md-12' id='tablelist'>
          <Table responsive="md" striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>NOMBRE</th>
                <th>DESCRIPCIÓN</th>
                <th>RESPONSABLE</th>
              </tr>
            </thead>
            <tbody>
              {proyecto.map((proyecto, index) => {
                return <ProjectsTable link='DetailsProject/' index={index + 1} proyecto={proyecto} />
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default ProjectList;
