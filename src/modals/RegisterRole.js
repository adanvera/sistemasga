import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FloatingLabel, Form } from "react-bootstrap";
import swal from "sweetalert";
import { URL_CREAR_ROL } from "../helpers/endPoints";

function RegisterRole() {
  const [rolename, setRoleName] = useState("")
  const [accesos, setAccesos] = useState("")
  const handleSubmitRole= async (e)=>{
      e.preventDefault();
      if([rolename,accesos].includes("")){
        return swal({
          icon: "error",
          text: "Todos los campos son obligatorios",
        });
      }

      let option ={
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({rolename,accesos}),
      };
      try {
        const res = await fetch(URL_CREAR_ROL, option), 
        json = await res.json();

        if(!res.ok){
          console.log(json)
          return swal({
            icon: "error",
            text: json.msg,
          });
        }
        return swal({
          icon:"success",
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

    
  const [selectedOption, setSelectedOption] = useState(accesos[0].value);

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
          <Form className="ml-dos" onChange={(e) => setAccesos(e.target.value)}  >
            <Form.Check type="switch" id="modulo-proyecto" label="Poryecto" />
            <Form.Check type="switch" id="modulo-seguridad" label="Seguridad" />
            <Form.Checkn type="switch" id="modulo-desarrollo" label="Desarrollo"/>
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
