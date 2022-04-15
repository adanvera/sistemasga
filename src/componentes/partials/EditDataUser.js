import React, { useEffect, useState } from 'react'
import { FloatingLabel, Form } from "react-bootstrap";
import swal from 'sweetalert';
import { URL_EDITAR_USER } from '../../helpers/endPoints';
import Rolelistreg from '../Rolelistreg';
const urlRoles = "http://localhost:4000/api/role/"



export const EditDataUser = ({ usuario, index }) => {

    const idUser = usuario.uui
    const [nombre, setNombre] = useState(usuario.nombre)
    const [apellido, setApellido] = useState(usuario.apellido)
    const [correo, setCorreo] = useState(usuario.correo)
    const [roleActual, setRoleActual] = useState(usuario.rol)
    const [visible, setVisible] = useState(false);
    const [role, setRole] = useState([])



    useEffect(() => {
        const getRole = async () => {
            try {
                const res = await fetch(urlRoles),
                    data = await res.json()
                setRole(data.roles)
            } catch (error) {
                console.log(error);
            }
        }
        getRole()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        let option = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nombre, apellido, correo, roleActual }),
        };

        try {
            const res = await fetch(URL_EDITAR_USER + idUser, option),
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
                text: "Usuario modificado exitosamente"
            });
        } catch (error) {
            console.log(error.response);
            return swal({
                icon: "error",
                text: "Ocurrio un error al modificar el usuario",
            });
        }
    }

    return (
        <Form className="container-fluid register-content" >
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <>
                        <FloatingLabel
                            controlId="floatingInputName"
                            label={'Nombre'}
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </FloatingLabel>
                    </>
                </div>
                <div className="col-md-6">
                    <>
                        <FloatingLabel
                            controlId="floatingInputLastName"
                            label="Apellido"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}
                            />
                        </FloatingLabel>
                    </>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <>
                        <FloatingLabel
                            controlId="floatingInputMail"
                            label="Correo electrónico"
                            className="mb-3"
                        >
                            <Form.Control
                                type="mail"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}
                            />
                        </FloatingLabel>
                    </>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-12 mt-3">
                    <label>Rol actual:</label>
                    <Form.Select aria-label="Tipo" onChange={(e) => setRoleActual(e.target.value)} >
                        <option disabled selected>SELECCIONAR ROL</option>
                        <Rolelistreg roles={role} />
                    </Form.Select>
                </div>
                <div className="col-md-12 mt.3">
                    <button className="btn-cancel w-100" color="secondary">cancelar</button>
                    <button className="btn-crear w-100 mt-1" onClick={handleSubmit}>actualizar usuario</button>
                </div>
            </div>
        </Form>
    )
}

export default EditDataUser