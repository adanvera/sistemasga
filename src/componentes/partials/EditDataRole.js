
import React, { useContext, useEffect, useState } from 'react'
import { FloatingLabel, Form } from "react-bootstrap";
import swal from 'sweetalert';
import { DataContext } from '../../context/DataContext';
import { URL_EDITAR_ROL } from '../../helpers/endPoints';
const urlRoles = "http://localhost:4000/api/role/"

export const EditDataRole = ({ rl }) => {

    const IdRole = rl._id
    const [rol, setRole] = useState(rl.rol)

    const [optProyecto, setOptProyecto] = useState("")
    const [optSeguridad, setOptSeguridad] = useState("")
    const [optDesarrollo, setOptDesarrollo] = useState("")
    
    const [accesoActual, setAccesoActual] = useState(rl.acceso)

    const acceso = [optDesarrollo, optProyecto, optSeguridad]

    console.log(acceso);

    
    const handleSubmit = async (e) => {
        e.preventDefault()

        let options = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ rol, acceso })
        };

        try {
            const res = await fetch(URL_EDITAR_ROL + IdRole, options),
                json = await res.json()
            if (!res.ok) {
                console.log(json)
                return ({
                    icon: "error",
                    text: json.msg,
                })
            }
            return swal({
                icon: "success",
                text: "Rol modificado exitosamente"
            })
        } catch (error) {
            console.log(error.response);
            return swal({
                icon: "error",
                text: "Ocurrio un error al modifcar el rol"
            })
        }
    }




    return (
        <>
            <div className="col-md-12">
                <FloatingLabel
                    controlId="floatingInputName"
                    label="Nombre del rol"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="Ingrese nombre"
                        value={rol}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </FloatingLabel>
            </div>
            <div className="col-md-12">
                <div>
                    <h6>ACCESO ACTUAL:</h6>
                    <div className='acceso-actual'>
                        {accesoActual}
                    </div>
                </div>
                <label className='pt-3 pb-3'>Asignar nuevos accesos a rol</label>
                <Form className="ml-dos">
                    <Form.Check type="switch" id="modulo-proyecto" value="proyecto" label="Poryecto" onChange={(e) => setOptProyecto(e.target.value)} />
                    <Form.Check type="switch" id="modulo-seguridad" value="seguridad" label="Seguridad" onChange={(e) => setOptSeguridad(e.target.value)} />
                    <Form.Check type="switch" id="modulo-desarrollo" value="desarrollo" label="Desarrollo" onChange={(e) => setOptDesarrollo(e.target.value)} />
                </Form>
            </div>
            <div className="col-md-12 mt-3">
                <button className="btn-cancel w-100 mt-1 mb-1" color="secondary">cancelar</button>
                <button className="btn-crear w-100 mt-1" onClick={handleSubmit}>actualizar usuario</button>
            </div>
        </>
    )

}
