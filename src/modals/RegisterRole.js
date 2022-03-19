import React from "react";
import { Container } from "react-bootstrap";
import { FloatingLabel, Form } from "react-bootstrap";
import swal from "sweetalert";

function RegisterRole() {
    const handleSubmitRole=()=>{
        swal({
          title: "Epaa, esa función está en desarrollo",
          text: "En la proxima ya estará funcionando crack ;) !",
          icon: "warning",
          button: "ok",
        });
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
              /* onChange={(e) => setNombre(e.target.value)} */
            />
          </FloatingLabel>
        </div>
        <div className="col-md-12">
          <label>Con acceso a modulo de: </label>
          <Form className="ml-dos">
            <Form.Check type="switch" id="modulo-proyecto" label="Poryecto" />
            <Form.Check type="switch" id="modulo-seguridad" label="Seguridad" />
            <Form.Check
              type="switch"
              id="modulo-desarrollo"
              label="Desarrollo"
            />
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
