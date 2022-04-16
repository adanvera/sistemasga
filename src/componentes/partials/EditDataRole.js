
import React, { useContext, useEffect, useState } from 'react'
import { FloatingLabel, Form } from "react-bootstrap";
import { DataContext } from '../../context/DataContext';
const urlRoles = "http://localhost:4000/api/role/"

export const EditDataRole = ({ rl }) => {

    console.log(rl);

    const [rol, setRoleName] = useState(rl.rol)




    const [optProyecto, setOptProyecto] = useState(rl.acceso)
    const [optSeguridad, setOptSeguridad] = useState(rl.acceso)
    const [optDesarrollo, setOptDesarrollo] = useState(rl.acceso)

    const options = [
        { value: 'Proyecto', label: 'Proyecto' },
        { value: 'Desarollo', label: 'Desarrollo' },
        { value: 'Seguridad', label: 'Seguridad' },
    ];

    const acceso = [optDesarrollo, optProyecto, optSeguridad]






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
                        onchange={(e) => setRoleName(e.target.value)}
                    />
                </FloatingLabel>
            </div>
            <div className="col-md-12">
                <label>Con acceso a modulo de: </label>
                <Form className="ml-dos" >
                    <Form.Check type="switch" id="modulo-proyecto" value="proyecto" label="Poryecto" onChange={(e) => setOptProyecto(e.target.value)} />
                    <Form.Check type="switch" id="modulo-seguridad" value="seguridad" label="Seguridad" onChange={(e) => setOptSeguridad(e.target.value)} />
                    <Form.Check type="switch" id="modulo-desarrollo" value="desarrollo" label="Desarrollo" onChange={(e) => setOptDesarrollo(e.target.value)} />
                </Form>
            </div>
            <div className="col-md-12 mt.3">
                <button className="btn-cancel w-100" color="secondary">cancelar</button>
                {/* <button className="btn-crear w-100 mt-1" onClick={handleSubmit}>actualizar usuario</button> */}
            </div>
        </>
    )

}
