import React from 'react'
import { Container, FloatingLabel, Form } from 'react-bootstrap'
import { useState } from 'react';
import Rolelistreg from './Rolelistreg';
import { useEffect } from 'react';
import swal from 'sweetalert';
import { URL_CREAR_USUARIO } from "../helpers/endPoints";
const urlRoles = "http://localhost:4000/api/role/"




export const EditUser = ({ usuario }) => { 
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [rol, setRolUser] = useState("");

    const [role, setRole] = useState([])
	useEffect(() => {
		const getRole = async() =>{
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
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        if ([nombre, apellido, correo].includes("")) {
        return swal({
            icon: "error",
            text: "Todos los campos son obligatorios",
        });
        }

        let option = {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, apellido, correo, rol}),
        };
        try {
            const res = await fetch(URL_CREAR_USUARIO, option),
            json = await res.json();

            if(!res.ok){
                return swal({
                    icon: "error",
                    text: json.msg,
                });
            }
            return swal({
                icon: "success",
                text: "Usuario actualizado correctamente",
            });
        } catch (error) {
            return swal({
                icon: "error",
                text: "Ocurrio un error",
            });
        }
    }

    return (
    <>
        <Container className="register-box">
            <section className="container-fluid register-content">
            <div id=''>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <>
                            <FloatingLabel
                                controlId="floatingInputName"
                                label="Nombre"
                                className="mb-3"
                                >
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese nombre"
                                    onChange={(e) => setNombre(usuario.nombre.value)}
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
                                placeholder="Ingrese apellido"
                                onChange={(e) => setApellido(e.target.value)}
                                />
                            </FloatingLabel>
                        </>
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
                                    placeholder="Ingrese correo electrónico"
                                    onChange={(e) => setCorreo(e.target.value)}
                                />
                                </FloatingLabel>
                            </>
                        </div>
                    </div>
                    <div className='col-md-12 mt-3'>
						<Form.Select aria-label="Tipo" onChange={(e) => setRolUser(e.target.value)} >
							<option disabled selected>SELECCIONAR ROL</option>
                            <Rolelistreg roles={role}/>
						</Form.Select>
					</div>
                    <div className="row mt-5 justify-content-center">
                        <div className="col-md-12 bt-centrar">
                            <button type="submit" className="btn-crear w-100" onClick={handleSubmit}>Actualizar</button>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </Container>
    </>
  )
}
