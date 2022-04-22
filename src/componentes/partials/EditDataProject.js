import React, { useEffect, useState } from 'react'
import { Container, FloatingLabel, Form } from 'react-bootstrap'
import projectLogo from '../../images/logoproject.png'
import Select from 'react-select'
import UserList from '../UserList'
const urlUsers = "http://localhost:4000/api/usuario/"


function EditDataProject({ proyecto }) {

    console.log(proyecto);

    const [usuario, setUsurio] = useState([])

    const [nombre, setNombre] = useState(proyecto.nombre)
    const [descripcion, setDescripcion] = useState(proyecto.descripcion)
    const [responsable, setResponsable] = useState(proyecto.responsable)


    useEffect(() => {
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


    const options = usuario.forEach(us => {

        return {
            value: us.nombre,
            label: us.nombre,
        }
    })

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    // ]

    const handleSubmit = async (e) => { }

    console.log(responsable);

    return (
        <>
            <Container>
                <section className="container-fluid register-content">
                    <div id="">
                        <div className='img-create pb-5 d-flex'>
                            <div>
                                <img src={projectLogo} />
                            </div>
                            <div className='mt-3 pl-2'>
                                <h1>EDITAR PROYECTO</h1>
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
                                        value={nombre}
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
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                />
                            </FloatingLabel>
                        </div>
                        <div className="col-md-12">
                            <label>Asignar responsable del proyecto</label>
                            <Form.Select aria-label="Tipo" onChange={(e) => setResponsable(e.target.value)} >
                                <option disabled selected>SELECCIONAR ROL</option>
                                <UserList usuario={usuario} />
                            </Form.Select>
                        </div>
                        
                        <div className="row mt-5">
                            <div className="col-md-3 bt-centrar">
                                <button type="submit" className="btn-crear w-100" onClick={handleSubmit}>actualizar proyecto</button>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default EditDataProject