import { CButton } from '@coreui/react'
import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import swal from 'sweetalert'
import { URL_CREATE_US_STORY } from '../../helpers/endPoints'



function CreateUs({ dataProject }) {

    //creamos e inicializamos las variables a utilizar
    const [task, setTask] = useState('')
    const [us_state, setUsState] = useState('backlog')
    const [us_priority, setUsPriority] = useState('low')
    const [id_project, setIdProject] = useState(dataProject._id)
    const [name_project, setNameProject] = useState(dataProject.nombre)

    const reload = () => {
        window.location.reload(true);
    }

    //funcion para enviar las variables a la accion correspondiente
    const handleSubmit = async (e) => {
        e.preventDefault()

        //nos aseguramos que los campos obligatorios se llenen
        if ([task].includes("")) {
            return swal({
                icon: "error",
                text: "Todos los campos son obligatorios",
            });
        }

        //lamada al metodo correspondiente y luego la accion
        let option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ task, us_state, us_priority, id_project, name_project }),
        };
        try {
            const res = await fetch(URL_CREATE_US_STORY, option),
                json = await res.json()
            if (!res.ok) {
                console.log(json)
                return swal({
                    icon: "error",
                    text: json.msg,
                });
            }
           
        reload()
        } catch (error) {
            console.log(error.response);
            return swal({
                icon: "error",
                text: "Ocurrio un error",
            });
        }
    }

    return (
        <div className='boxUs'>
            <form>
                <FloatingLabel
                    controlId="FloatingTaskName"
                    label="Tarea a llevar a cabo"
                    className="mb-3"
                >
                    <Form.Control
                        type="text"
                        placeholder="Tarea a llevar a cabo"
                        onChange={(e) => setTask(e.target.value)}
                    />
                </FloatingLabel>
                <CButton type="submit" className='createUS'>Cancelar</CButton>
                <CButton type="submit" onClick={handleSubmit} className='createUS mll'>Ok</CButton>
            </form>
        </div>
    )
}

export default CreateUs