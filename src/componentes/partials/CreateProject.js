import React, { useState } from 'react'
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { URL_CREAR_PROYECTO } from '../../helpers/endPoints';
import projectLogo from '../../images/logoproject.png'




function CreateProject({ role }) {

    const reload = () => {
        window.location.reload(true);
    }

    //declaramos las variables a utilizar
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')

    //funcion para enviar los valores a ingreasr para crear el proyecto
    const handleSubmit = async (e) => {
        e.preventDefault()

        //nos aseguramos de pasar todos los campos requeridos
        if ([nombre, descripcion].includes("")) {
            return swal({
                icon: "warning",
                text: "Todos los campos son requeridos"
            })
        }

        //llamamos al metodo correspondiente para realizar la accion
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
            reload()
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
        <>
            <Container className="register-box-head">
                <section className="">
                    <Link to="#"><ion-icon name="arrow-back-outline"></ion-icon> Volver atras</Link>
                </section>
            </Container>
            <Container className="register-box">
                <section className="container-fluid register-content">
                    <div id="">
                        <div className='img-create pb-5 d-flex'>
                            <div>
                                <img src={projectLogo} />
                            </div>
                            <div className='mt-3 pl-2'>
                                <h1>NUEVO PROYECTO</h1>
                            </div>
                        </div>
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
                        <div className="row mt-5">
                            <div className="col-md-3 bt-centrar">
                                <button type="submit" className="btn-crear w-100" onClick={handleSubmit}>crear proyecto</button>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default CreateProject