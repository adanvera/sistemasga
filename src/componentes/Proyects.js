import React from 'react';
import { Container, Form, FormControl, Button, Table, Modal } from 'react-bootstrap';
import ProjectList from './ProjectList';
import swal from 'sweetalert';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import myphoto from '../images/perfil.png'
import { DataContext } from '../context/DataContext'
import { URL_PROYECTOS } from '../helpers/endPoints';
import Other from './Other';
import CreateProject from './partials/CreateProject';
import NoData from './NoData';
import MUIDataTable from "mui-datatables";

function Proyects({ rol }) {
  // variable para la navegacion entre ventanas mediante btotones a ser clikeadas
  const [currentScreen, setCurrentScreen] = useState({ pr: true, other: false, prCreate: false })

  function ModalCreateProject() {
    //consultamos el localStorage
    //obtenemos  los datos del usuario logueado
    useEffect(() => {
      const data = localStorage.getItem('auth')
      if (!data) {
        localStorage.setItem('auth', JSON.stringify(user))
        setRole(user.usuarioEncontrado.role)
        return
      }
      const usuario = JSON.parse(data);
      setRole(usuario.usuarioEncontrado.rol)
    })
    //varibbles a ser utilizadas
    const [role, setRole] = useState([])
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    //onclick para mostrar modal de creacion de un proyecto
    const handleShow = () => {
      //filtramos si su rol es admin levanta el modal
      if (role !== 'SEGURIDAD') {
        setCurrentScreen({ ...currentScreen, pr: false, other: false, prCreate: true })
      } else if (role === 'SEGURIDAD') {//si el rol no es el permitido lanza advertencia
        swal({
          title: "ADVERTENCIA",
          text: "Su rol no tiene permisos para crear un proyecto",
          icon: "warning",
          button: "ok",
        });
      }
    }
    return (//modal de creacion de proyecto
      <>
        {/* boton de creacion de proyecto que renderiza en la pantalla principal */}
        <Button className="btn btn-cr-pro"
          onClick={handleShow} >
          <ion-icon name="add-circle-outline"></ion-icon>
          <span className='pr-2'> CREAR NUEVO PROYECTO </span>
        </Button>
      </>
    )
  }

  const { user } = useContext(DataContext)
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [proyecto, setProyecto] = useState([])

  //consultamos el localStorage
  useEffect(() => {
    const data = localStorage.getItem('auth')
    if (!data) {
      setNombre(user.usuarioEncontrado.nombre)
      localStorage.setItem('auth', JSON.stringify(user));
      setApellido(user.usuarioEncontrado.apellido)
      localStorage.setItem('auth', JSON.stringify(user))
      return
    }
    const usuario = JSON.parse(data);
    setNombre(usuario.usuarioEncontrado.nombre);
    setApellido(usuario.usuarioEncontrado.apellido);

    const getProject = async () => {
      try {
        const res = await fetch(URL_PROYECTOS),
          data = await res.json()
        setProyecto(data.proyectos)
      } catch (error) {
        console.log(error);
      }
    }
    getProject()

  }, [])

  const columns = ["nombre", "descripcion", "responsable",];

  const options = {
    filterType: 'checkbox',
    download: true,
    print: false,
    selectableRows: false,
    textLabels: {
      body: {
        noMatch: "Ups, no se encontro ningún registro",
        toolTip: "Ordenar",
        columnHeaderTooltip: column => `Ordenar por ${column.label}`
      },
      pagination: {
        next: "Siguiente Pagina",
        previous: "Anterior pagina",
        rowsPerPage: "Filas por paginas:",
        displayRows: "de",
      },
      toolbar: {
        search: "Search",
        downloadCsv: "Download CSV",
        print: "Print",
        viewColumns: "View Columns",
        filterTable: "Filter Table",
      },
    }
  };

  return (
    <>
      <div className="navbar justify-content-between w-100 " variant="dark">
        <nav className='items'>
          <ion-icon name="reorder-three-outline"></ion-icon>
          <button type="submit"
            className="nav-sg"
            onClick={() => setCurrentScreen({ ...currentScreen, pr: true, other: false, prCreate: false })} > <p><ion-icon name="grid-outline"></ion-icon> Proyectos</p>
          </button>
          <button type="submit" className="nav-sg" onClick={() => setCurrentScreen({ ...currentScreen, pr: false, other: true, prCreate: false })} >Other</button>
        </nav>
        <nav className="">
          <Link to="#pricing" className="d-flex">
            <div className="t-a">
              <p className="p-style fw-100">Bienvenido</p>
              <span className="username">{nombre} {apellido}</span>
            </div>
            <div className="pl">
              <img src={myphoto} alt="" />
            </div>
          </Link>
        </nav>
      </div>
      <Container fluid={true} className="mt-5" id='proyects'>
        <div className='row'>
          {(currentScreen.pr &&
            <div className='col a-end'>
              <ModalCreateProject />
            </div>)}
        </div>
        {currentScreen.pr &&
          <>
            {proyecto.length === 0 && <NoData />}
            {
              proyecto.length !== 0 &&
              <div className='mt-5'>
                <MUIDataTable
                  title={"Lista de proyectos"}
                  data={proyecto}
                  columns={columns}
                  options={options}
                />
              </div>
            }
          </>
        }
        {currentScreen.prCreate && <CreateProject />}
        {currentScreen.other && <Other />}
      </Container>
    </>
  );
}

export default Proyects;
