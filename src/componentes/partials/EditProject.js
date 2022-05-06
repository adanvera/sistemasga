import React, { useContext, useEffect, useState } from 'react'
import { Container, FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { DataContext } from '../../context/DataContext'
import { URL_ELMINAR_PROJECT } from '../../helpers/endPoints'
import EditDataProject from './EditDataProject'
const urlUsers = "http://localhost:4000/api/usuario/"



function EditProject({ dataProject }) {

    const [roleAuth, setRoleAuth] = useState([])
    const { user, setUser } = useContext(DataContext)
    const [usuario, setUsurio] = useState([])
    const idPr = dataProject._id
    const [currentScreen, setCurrentScreen] = useState({ prDetails: true, prEdit: false })

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

    console.log(roleAuth)

    const deleteProject = async () => {
        //aca debe ir la logica de eliminacion
        if (roleAuth === "ADMIN") {
            swal({
                title: "¿Estas seguro?",
                text: "Una vez eliminado el proyecto no se puede revertir",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then(async (willDelete) => {
                if (willDelete) {
                    swal("Proyecto eliminado exitosamente", {
                        icon: "success",
                    });
                    await fetch(URL_ELMINAR_PROJECT + idPr, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/jason" }
                    });
                }
            });
        } else (swal({
            text: "Su rol no posse permiso para eliminar un proyecto",
        }))
    }

    const aver = async () => {
        if (roleAuth !== "ADMIN") {
            swal({
                text: "Su rol no posee permisos para modificar un proyecto"
            })
        } else if (roleAuth === "ADMIN") {
            setCurrentScreen({ ...currentScreen, prDetails: false, prEdit: true })
        }
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