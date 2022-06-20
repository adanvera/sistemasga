import React, { useContext, useEffect, useState } from 'react'
import { Container, FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { DataContext } from '../../context/DataContext'
import { URL_ELMINAR_PROJECT } from '../../helpers/endPoints'
import EditDataProject from './EditDataProject'
const urlUsers = "http://localhost:4000/api/usuario/"



function EditProject({ dataProject }) {

    //declaramos e inicializamos las variables a ser utilizadas
    const [roleAuth, setRoleAuth] = useState([])
    const { user, setUser } = useContext(DataContext)
    const [usuario, setUsurio] = useState([])
    const idPr = dataProject._id
    const [currentScreen, setCurrentScreen] = useState({ prDetails: true, prEdit: false })

    const reload = () => {
        window.location.reload(true);
    }

    //obtenemos el usuario y el rol del usuario logueado
    useEffect(() => {
        const data = localStorage.getItem('auth')
        if (!data) {
            localStorage.setItem('auth', JSON.stringify(user))
            setRoleAuth(user.usuarioEncontrado.roleAuth)
            return
        }
        const usuarioAuth = JSON.parse(data);
        setRoleAuth(usuarioAuth.usuarioEncontrado.rol)
    })

    //funcion para elimiar proyecto
    const deleteProject = async () => {
        //aca debe ir la logica de eliminacion
        swal({
            title: "¿Estas seguro?",
            text: "Una vez eliminado el proyecto no se puede revertir",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                reload()
                swal("Proyecto eliminado exitosamente", {
                    icon: "success",
                });
                await fetch(URL_ELMINAR_PROJECT + idPr, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/jason" }
                });
            }
        });
    }

    //funcion para validar el rol
    const aver = async () => {
        setCurrentScreen({ ...currentScreen, prDetails: false, prEdit: true })
    }

    return (
        <>
            {currentScreen.prDetails &&
                <>
                    <Container className="register-box-head">
                        <section className="">
                            <Link to=""><ion-icon name="arrow-back-outline"></ion-icon> Volver atras</Link>
                        </section>
                    </Container>
                    <Container className="register-box">
                        <section className="container-fluid register-content">
                            <div id="">
                                <div className='img-create pb-5 d-flex'>

                                    <div className='mt-3 pl-2'>
                                        <h1>ADMINISTRAR PROYECTO</h1>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <span className='editpr d-flex' onClick={aver}><ion-icon name="options-outline"></ion-icon><p>Editar poryecto</p></span>
                                </div>
                                <div>
                                    <span className='delpr d-flex' onClick={deleteProject} ><ion-icon name="trash-outline"></ion-icon><p>Eliminar proyecto</p></span>
                                </div>
                            </div>
                        </section>
                    </Container>
                </>
            }

            {currentScreen.prEdit && <EditDataProject dataProject={dataProject} />}


        </>
    )
}

export default EditProject