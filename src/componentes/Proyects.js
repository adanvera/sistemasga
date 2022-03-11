import React from 'react';
import { Container, Form, FormControl, Button, Table} from 'react-bootstrap';
import ProjectList from './ProjectList';
import swal from 'sweetalert';



function Proyects() {

  const showalert=()=>{
    swal({
      title: "Epaa, esa función está en desarrollo",
      text: "En la proxima ya estará funcionando crack ;) !",
      icon: "warning",
      button: "ok",
    });
  }
  

  return (
    <Container fluid={true} className="mt-5" id='proyects'>
      <div className='row'>
        <div className='col pb-2'>
          <h4>PROYECTOS</h4>
        </div>
        <div className='col a-end'>
          <button className='btn btn-cr-pro' type="" onClick={()=>showalert()}>crear proyecto</button>
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

      <ProjectList/>


    </Container>
  );
}

export default Proyects;
