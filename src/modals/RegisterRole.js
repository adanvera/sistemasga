import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FloatingLabel, Form } from "react-bootstrap";
import swal from "sweetalert";
import { URL_CREAR_ROL } from "../helpers/endPoints";

function RegisterRole() {
  const [rol, setRoleName] = useState("")

  const [optProyecto, setOptProyecto] = useState("")
  const [optSeguridad, setOptSeguridad] = useState("")
  const [optDesarrollo, setOptDesarrollo] = useState("")

  const handleSubmitRole = async (e) => {
    e.preventDefault();
    if ([rol].includes("")) {
      return swal({
        icon: "error",
        text: "Todos los campos son obligatorios",
      });
    }

    const acceso = [optDesarrollo , optProyecto , optSeguridad]

    let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rol, acceso }),
    };
    console.log(option.body);
    try {
      const res = await fetch(URL_CREAR_ROL, option),
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
        text: "rol creado exitosamente"
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
        <div className="col-md-12">
          <FloatingLabel
            controlId="floatingInputName"
            label="Nombre del rol"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Ingrese nombre"
              onChange={(e) => setRoleName(e.target.value)}
            />
          </FloatingLabel>
        </div>
        <div className="col-md-12">
          <label>Con acceso a modulo de: </label>
          <Form className="ml-dos" >
            <Form.Check type="switch" id="modulo-proyecto" value="proyecto" label="Poryecto" onChange={(e) => setOptProyecto(e.target.value)} />
            <Form.Check type="switch" id="modulo-seguridad" value="seguridad" label="Seguridad" onChange={(e) => setOptSeguridad(e.target.value)} />
            <Form.Check type="switch" id="modulo-desarrollo" value="desarrollo" label="Desarrollo" onChange={(e) => setOptDesarrollo(e.target.value)} />
          </Form>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-md-12 bt-centrar">
            <button
              type="submit"
              className="btn-crear w-100" onClick={handleSubmitRole}>
              crear rol
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default RegisterRole;
