import { useState } from "react"
import { Form } from "react-bootstrap"
import swal from "sweetalert";
import { URL_ADD_US_SPRINT } from "../helpers/endPoints";



function AddTaskSprint({ iddd, tasksBk }) {

    const [optionees, setOptions] = useState("")

    const reload = () => {
        window.location.reload(true);
    }

    const handleSubmitRole = async (e) => {
        e.preventDefault();
        const user_stories = [optionees]
        let option = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_stories }),
        };

        console.log(URL_ADD_US_SPRINT+iddd);

        try {
            const res = await fetch(URL_ADD_US_SPRINT+iddd, option),
                json = await res.json();

            if (!res.ok) {
                console.log(json)
                return swal({
                    icon: "error",
                    text: json.msg,
                });
            }
            reload()
            return swal({
                icon: "success",
                text: "User story añadido correctamente"
            });
        } catch (error) {
            console.log(error.response);
            return swal({
                icon: "error",
                text: "Ocurrio un error al añadir el user story",
            });
        }
    }

    return (
        <div className="col-md-12">
            <label>Tareas</label>
            {
                tasksBk.map(item => {
                    return (
                        <Form className="d-flex" >
                            <Form.Check type="switch" id="modulo-proyecto" onChange={(e) => setOptions(e.target.value)} value={item._id} />{item.task}
                        </Form>
                    )
                })
            }

            <div className="row mt-5 justify-content-center">
                <div className="col-md-12 bt-centrar">
                    <button
                        type="submit"
                        className="btn-crear w-100" onClick={handleSubmitRole}>añadir
                    </button>
                </div>
            </div>

        </div>
    )
}



export default AddTaskSprint

