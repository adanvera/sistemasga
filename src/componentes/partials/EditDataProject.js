import React, { useContext, useEffect, useState } from 'react'
import { Container, FloatingLabel, Form } from 'react-bootstrap'
import projectLogo from '../../images/logoproject.png'
import Select from 'react-select'
import UsListPr from '../UsListPr'
import { Autocomplete, TextField } from '@mui/material'
import { DataContext } from '../../context/DataContext'
import swal from 'sweetalert'
import { URL_EDIT_PROJECT } from '../../helpers/endPoints'
import { Link } from 'react-router-dom'
const urlUsers = "http://localhost:4000/api/usuario/"

function EditDataProject({ dataProject }) {

    //declaramos e inicializamos las variables a ser utilizadas
    const [roleAuth, setRoleAuth] = useState([])
    const { user, setUser } = useContext(DataContext)
    const [usuario, setUsurio] = useState([])
    const [nombre, setNombre] = useState(dataProject.nombre)
    const [descripcion, setDescripcion] = useState(dataProject.descripcion)
    const [responsable, setResponsable] = useState(dataProject.responsable)
    const [usuarios, setUsuarios] = useState(dataProject.usuarios)

    //obtnenemos el usuario logueado y su rol correspondiente
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

        const data = localStorage.getItem('auth')
        if (!data) {
            localStorage.setItem('auth', JSON.stringify(user))
            setRoleAuth(user.usuarioEncontrado.roleAuth)
            return
        }
        const usuarioAuth = JSON.parse(data);
        setRoleAuth(usuarioAuth.usuarioEncontrado.rol)
    }, [])

    //guardamos el id del proyecto
    const idPr = dataProject._id

    //funcion para modificar el proyecto, pasando los parametros devidos
    const handleSubmit = async (e) => {
        e.preventDefault()
        let option = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ nombre, descripcion, responsable, usuarios }),
        };
        try {
            const res = await fetch(URL_EDIT_PROJECT + idPr, option),
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
                text: "Proyecto modificado exitosamente"
            });
        } catch (error) {
            console.log(error.response);
            return swal({
                icon: "error",
                text: "Ocurrio un error al modificar el proyecto",
            });
        }
    }

    return (
        <>
            <Container fluid={true} className="register-box-head">
                <section className="">
                    <Link to="#"><ion-icon name="arrow-back-outline"></ion-icon> Volver atras</Link>
                </section>
            </Container>
            <Container fluid={true}>
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
                        <div className="col-md-12 pt-3">
                            <label>Asignar responsable del proyecto</label>
                            <Form.Select aria-label="Tipo" value={responsable} onChange={(e) => setResponsable(e.target.value)} >
                                <option disabled >{responsable}</option>
                                <option value="Sin responsable" >Sin responsable</option>
                                <UsListPr usuario={usuario} />
                            </Form.Select>
                        </div>
                        <div className="col-md-12 pt-3">
                            <Autocomplete
                                multiple
                                value={usuarios}
                                onChange={(e, v) => setUsuarios(v)}
                                id="tags-outlined"
                                options={usuario}
                                getOptionLabel={(usuario) => usuario.nombre + " " + usuario.apellido}
                                filterSelectedOptions
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Usuarios asignados"
                                        value={usuarios}
                                        placeholder="Usuarios"
                                        onChange={({ target }) => setUsuarios(target.value)}
                                    />
                                )}
                            />
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