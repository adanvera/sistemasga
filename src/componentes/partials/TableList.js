import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React, { useContext, useEffect, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import swal from 'sweetalert'
import { DataContext } from '../../context/DataContext'
import { URL_DELETE_US, URL_UPDATE_US } from '../../helpers/endPoints'
import user_one from '../../images/users/user_one.png'
import UserList from '../UserList'

const urlUsers = "http://localhost:4000/api/usuario/"




function TableList({ item, dataProject }) {

    //declaramos e inicalizamos las variables a ser utilizadas
    const [visible, setVisible] = useState(false)
    const [roleAuth, setRoleAuth] = useState([])
    const { user, currentScreen } = useContext(DataContext)
    const [userAuthUui, setUserAuthUui] = useState([])
    const [task, setTask] = useState(item.task)
    const idUS = item.us_id
    const [us_state, setUsState] = useState(item.us_state)
    const [us_priority, setUsPriority] = useState(item.us_priority)
    const [assigned_user, setAssigned_User] = useState()
    const [usuario, setUsurio] = useState([])

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

        const getUser = async () => {
            try {
                const res = await fetch(urlUsers),
                    data = await res.json()
                setUsurio(data.usuarios)
            } catch (error) {
                console.log(error);
            }
        }
        getUser()

    }, [])

    const showUS = async () => {
        setVisible(!visible)
    }


    
    const reload = () => {
        window.location.reload(true);
    }

    //funcion para eliminar un user story
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
                    reload()
                    swal("Eliminado exitosamente", {
                        icon: "success",
                    });
                    await fetch(URL_DELETE_US + item.us_id, {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                    });
                }
            });
        }
    }

    //metodo para editar un user story
    const handleSubmit = async (e) => {
        e.preventDefault()
        let option = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ task, us_state, us_priority, assigned_user }),
        };

        try {
            const res = await fetch(URL_UPDATE_US + item._id, option),
                json = await res.json();

            if (!res.ok) {
                console.log(json)
                return swal({
                    icon: "error",
                    text: json.msg,
                });
            }
            reload()
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

    const showUser = (data) => {
        usuario.forEach(element => {
            if (element.uui === data) {
                return (element.nombre)
            }
        });
    }

    return (
        <>
            <div className='box-status-content' id='boxus'>
                <div className='row paddd'>
                    <div className='col d-flex' onClick={showUS} id="task-desc">
                        <div className='foot-box-task d-flex'>
                            <span className="number-task d-flex">US-{item.us_id}</span><p className='text-desc pl-2'>{item.task ? item.task : ''}</p>
                        </div>
                    </div>
                </div>
                <div className='row paddd'>
                    <div className='col d-flex' id='aveer'   >
                        <div className='user-us'>
                            <img src={user_one} alt="" />
                            <span className='pl-1' >Adán Vera </span>
                        </div>
                        <div className='ddd'><ion-icon onClick={deleteUS} name="trash-outline"></ion-icon></div>
                    </div>
                </div>
            </div>

            <CModal visible={visible} onClose={() => setVisible(false)} >
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>User Story - {item.task} </CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <>
                        <div className='textareaaaa'>
                            <label>Nombre de tarea:</label>
                            <textarea value={task} onChange={(e) => setTask(e.target.value)}></textarea>
                        </div>
                        <div className='col-md-12 d-flex justify-content-lg-between mt-3'>
                            <div className='col-md-5'>
                                <label>Estado</label>
                                <Form.Select aria-label="Tipo" value={us_state} onChange={(e) => setUsState(e.target.value)}  >
                                    <option value="backlog">BACKLOG</option>
                                    <option value="en_curso">EN CURSO</option>
                                    <option value="detenido">DETENIDO</option>
                                    <option value="a_verificar">A VERIFICAR</option>
                                    <option value="en_verificacion">EN VERIFICACION</option>
                                    <option value="finalizado">FINALIZADO</option>
                                </Form.Select>
                            </div>
                            <div className='col-md-5'>
                                <label>Prioridad</label>
                                <Form.Select aria-label="Tipo" value={us_priority} onChange={(e) => setUsPriority(e.target.value)}  >
                                    <option value="low">LOW</option>
                                    <option value="medium">MEDIUM</option>
                                    <option value="high">HIGH</option>
                                    <option value="urgent">URGENT</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className="col-md-12 pt-3">
                            <div className='col-md-5'>
                                <label>Asignar responsable del proyecto</label>
                                <Form.Select aria-label="Tipo" value={(assigned_user)} onChange={(e) => setAssigned_User(e.target.value)} >
                                    <option value="Sin responsable" >Sin responsable</option>
                                    <UserList usuario={usuario} />
                                </Form.Select>
                            </div>
                        </div>
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

export default TableList