import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React, { useContext, useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import swal from 'sweetalert'
import { DataContext } from '../../context/DataContext'
import { URL_DELETE_US, URL_UPDATE_US } from '../../helpers/endPoints'
import user_one from '../../images/users/user_one.png'



function BacklogList({ tasksBk, proyecto }) {


    const [visible, setVisible] = useState(false)
    const [roleAuth, setRoleAuth] = useState([])
    const { user, currentScreen } = useContext(DataContext)
    const [userAuthUui, setUserAuthUui] = useState([])

    const [task, setTask] = useState(tasksBk.task)

    const idUS = tasksBk.us_id


    console.log(tasksBk);


    //consultamos el localStorage y guardamos valor de rol 
    //para poder filtrar funciones mediante la misma
    useEffect(() => {
        const data = localStorage.getItem('auth')
        if (!data) {
            localStorage.setItem('auth', JSON.stringify(user))
            setRoleAuth(user.usuarioEncontrado.roleAuth)
            setUserAuthUui(user.usuarioEncontrado.uui)
            return
        }
        const usuarioAuth = JSON.parse(data);
        setRoleAuth(usuarioAuth.usuarioEncontrado.rol)
        setUserAuthUui(usuarioAuth.usuarioEncontrado.uui)
    })

    const showUS = async () => {
        setVisible(!visible)
    }

    const deleteUS = async () => {
        if (roleAuth !== "ADMIN") {
            swal({
                text: "Su rol no posee permisos para eliminar un user story"
            })
        } else if (roleAuth === "ADMIN") {
            swal({
                title: "¿Estas seguro?",
                text: "Una vez eliminado el este no se puede revertir",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then(async (willDelete) => {
                if (willDelete) {
                    swal("Eliminado exitosamente", {
                        icon: "success",
                    });
                    await fetch(URL_DELETE_US+tasksBk.us_id, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                    });
                }
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let option = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ task }),
        };

        try {
            const res = await fetch(URL_UPDATE_US+tasksBk._id, option),
                json = await res.json();

            if (!res.ok) {
                console.log(json)
                return swal({
                    icon: "error",
                    text: json.msg,
                });
            }
            return swal({
                icon: "success",
                text: "Us modificado exitosamente"
            });
        } catch (error) {
            console.log(error.response);
            return swal({
                icon: "error",
                text: "Ocurrio un error al modificar el us",
            });
        }
    }

    return (
        <>
            <div className='box-status-content' id='boxus'  >
                <div className='row paddd'>
                    <div className='col d-flex justify-content-between'>
                        <div className=''>
                            <img src={user_one} alt="" />
                            <span className='pl-1' >Adán Vera </span>
                        </div>
                        <div className='ddd'><ion-icon onClick={deleteUS} name="trash-outline"></ion-icon></div>
                    </div>
                </div>
                <div className='row paddd'>
                    <div className='text-description' onClick={showUS}>
                        <span>{tasksBk.task}</span>
                    </div>
                </div>
                <div className='row paddd'>
                    <div className='col' >
                        <div className='foot-box-task'>
                            <span className="number-task">US - {tasksBk.us_id} [{proyecto.nombre}]</span>
                        </div>
                    </div>
                    <div className='col commet-icon'>
                        <div>
                            <ion-icon name="chatbox-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>

            <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>User Story - {tasksBk.task} </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <>
                        <FloatingLabel
                            controlId="FloatingProjectName"
                            label="Tarea a llevar a cabo"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Tarea a llevar a cabo"
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
                            />
                        </FloatingLabel>
                    </>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>cancelar</CButton>
                    <CButton onClick={handleSubmit} className="btn-update">Aceptar</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default BacklogList