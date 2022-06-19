import React, { useState } from "react";
import { useEffect } from "react";
import { FloatingLabel, Form } from "react-bootstrap";


function CreateSprint({ id }) {
    const [name, setName] = useState("Sprint");
    const [descripcion, setDescripcion] = useState("");
    const [duration, setDuration] = useState("")

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
        </div>
    )
}

export default CreateSprint