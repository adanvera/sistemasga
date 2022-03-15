import React from "react";
import { useState } from "react";
import { Container, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { URL_CREAR_USUARIO } from "../helpers/endPoints";

function RegisterUser() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([nombre, apellido, correo, password, repetirPassword].includes("")) {
      return swal({
        icon: "error",
        text: "Todos los campos son obligatorios",
      });
    }
    if (password !== repetirPassword) {
      return swal({
        icon: "error",
        text: "Contraseñas no coinciden",
      });
    }
    if (password.length < 5) {
      return swal({
        icon: "error",
        text: "La contraseña debe tener mas de 5 caracteres",
      });
    }

    let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, apellido, correo, password }),
    };
    try {
      const res = await fetch(URL_CREAR_USUARIO, option),
        json = await res.json();

      if (!res.ok) {
        console.log(json);
        return swal({
          icon: "error",
          text: json.msg,
        });
      }
      return swal({
        icon: "success",
        text: "Usuario registrado correctamente !",
      });
    } catch (error) {
      console.log(error.response);
      return swal({
        icon: "error",
        text: "Ocurrio un error",
      });
    }
  };

  return (
    <>
      <Container className="register-box">
          <section className="container-fluid register-content">
            <div id="">
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
                        onChange={(e) => setNombre(e.target.value)}
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
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <FloatingLabel
                    controlId="floatingPassword"
                    label="Contraseña"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Ingrese contraseña"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FloatingLabel>
                </div>
                <div className="col-md-6">
                  <FloatingLabel
                    controlId="floatingConfirmPassword"
                    label="Confirmar contraseña"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Imgrese contraseña"
                      onChange={(e) => setRepetirPassword(e.target.value)}
                    />
                  </FloatingLabel>
                </div>
              </div>
              <div className="row mt-5 justify-content-center">
                <div className="col-md-12 bt-centrar">
                  <button
                    type="submit"
                    className="btn-crear"
                    onClick={handleSubmit}
                  >
                    Crear Cuenta
                  </button>
                </div>
              </div>
            </div>
          </section>
        </Container>
    </>
  );
}

export default RegisterUser;
