import React from "react";
import { useState } from "react";
import { Button, Modal } from "bootstrap";

function EditUser({ usuario }) {
    const [show, setShow] = useState(false);
		
		const handleClose = () => setShow(false);
		const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="btn btn-cr-pro" onClick={handleShow}>
        {" "}
        <ion-icon name="add-circle-outline"></ion-icon> crear usuario
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Registrar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>hola</h5>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditUser;
