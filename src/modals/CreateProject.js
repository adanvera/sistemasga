import { TextField } from '@material-ui/core';
import { Autocomplete } from '@mui/material';
import React from 'react'
import { useState } from "react";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import swal from 'sweetalert';
import { URL_CREAR_PROYECTO } from "../helpers/endPoints";




function CreateProject() {

    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if ([nombre, descripcion].includes("")) {
            return swal({
                icon: "warning",
                text: "Todos los campos son requeridos"
            })
        }

        let option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nombre, descripcion }),
        }
        try {
            const res = await fetch(URL_CREAR_PROYECTO, option),
                json = await res.json()
            if (!res.ok) {
                console.log(json);
                return swal({
                    icon: "error",
                    text: json.msg,
                })
            }
            return swal({
                icon: "success",
                text: "Proyecto creado exitosamente"
            })
        } catch (error) {
            console.log(error.response);
            return swal({
                icon: "error",
                text: "Ocurrio un error",
            });
        }
    }

    return (
        <Container className="register-box">
            <section className="container-fluid register-content">
                <div id="">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <>
                                <FloatingLabel
                                    controlId="FloatingProjectName"
                                    label="Nombre del proyecto"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Ingrese nombre del poyecto"
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </FloatingLabel>
                            </>
                        </div>
                        <div className="col-md-12">
                            <FloatingLabel
                                controlId="FloatingProjectName"
                                label="Descripción del proyecto"
                                className="mb-3"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese descripción del poyecto"
                                    onChange={(e) => setDescripcion(e.target.value)}
                                />
                            </FloatingLabel>
                        </div>
                        <div className="row mt-5 justify-content-center">
                            <div className="col-md-12 bt-centrar">
                                <button type="submit" className="btn-crear w-100" onClick={handleSubmit}>crear proyecto</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default CreateProject