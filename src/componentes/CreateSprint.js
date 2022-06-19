import React, { useState } from "react";
import { useEffect } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import swal from "sweetalert";
import { URL_CREATE_SPRINT, URL_PROYECTOS } from "../helpers/endPoints";


function CreateSprint({ id }) {

    const [name, setName] = useState("Sprint");
    const [description, setDescripcion] = useState("");
    const [duration, setDuration] = useState("")
    const [proyectoDatta, setProyecto] = useState([])
    const project = id

    useEffect(() => {
        const getProject = async () => {
            try {
                const res = await fetch(URL_PROYECTOS + id),
                    data = await res.json()
                setProyecto(data)
            } catch (error) {
                console.log(error);
            }
        }

        getProject()
    }, [])

    const reload = () => {
        window.location.reload(true);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, description, duration, project }),
        };
        try {
            const res = await fetch(URL_CREATE_SPRINT, option),
                json = await res.json();

            if (!res.ok) {
                console.log(json);
                return swal({
                    icon: "error",
                    text: json.msg,
                });
            }
            // return swal({
            //     icon: "success",
            //     text: "Usuario registrado correctamente !",
            // });
        } catch (error) {
            console.log(error.response);
            return swal({
                icon: "error",
                text: "Ocurrio un error",
            });
        }

        reload()
        
    }

    return (
        <div className=' col-md-12 box-dashboard'>
            <div className='title-section'>
                <input value={name} type="text" id="fname" name="fname" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="col-md-6 mt-4">
                <>
                    <FloatingLabel
                        controlId="floatingInputName"
                        label="Descripcion"
                        className="mb-3 spritt"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Descripcion"
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </FloatingLabel>
                </>
            </div>
            <div className="col-md-6 mt-4">
                <>
                    <FloatingLabel
                        controlId="floatingInputName"
                        label="Duración"
                        className="mb-3 spritt"
                    >
                        <Form.Control
                            type="text"
                            placeholder="Duración"
                            onChange={(e) => setDuration(e.target.value)}
                        />
                    </FloatingLabel>
                </>
            </div>
            <div className="row mt-5 justify-content-center">
                <div className="col-md-12 bt-centrar">
                    <button type="submit" className="btn-crear w-100" onClick={handleSubmit}>crear sprint</button>
                </div>
            </div>
        </div>
    )
}

export default CreateSprint