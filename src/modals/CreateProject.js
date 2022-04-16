import { TextField } from '@material-ui/core';
import { Autocomplete } from '@mui/material';
import React from 'react'
import { useState } from "react";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import swal from 'sweetalert';
import { URL_CREAR_PROYECTO } from "../helpers/endPoints";




function CreateProject() {

    const [projectName, setProjectName] = useState('')
    const [projectUsers, setProjectUsers] = useState('')

    const top100Films = [
        { title: 'Marcelo Barrios', year: 1994 },
        { title: 'Adán Vera', year: 1972 },
        { title: 'Melinda Gimenez', year: 1974 },
        { title: 'Guillermo Insfran', year: 2008 },
    ];


    const handleSubmit = async (e) => {
        e.preventDefault();
        if ([projectName].includes("")) {
            return swal({
                icon: "error",
                text: "Todos los campos son obligatorios",
            });
        }

        let option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ projectName }),
        }

        console.log(option.body);

        try {
            const res = await fetch(URL_CREAR_PROYECTO, option),
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
                text: "Proyecto creado exitosamente"
            });
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
                                        onChange={(e) => setProjectName(e.target.value)}
                                    />
                                </FloatingLabel>
                            </>
                        </div>
                        {/* <div className="col-md-12">
                            <>
                                <Autocomplete
                                    multiple
                                    limitTags={2}
                                    id="multiple-limit-tags"
                                    options={top100Films}
                                    getOptionLabel={(option) => option.title}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Asignar usuarios al proyecto" placeholder="usuarios" />
                                    )}
                                    sx={{ width: '400px' }}
                                />
                            </>
                        </div> */}
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