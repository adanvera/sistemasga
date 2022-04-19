import React, { Component } from "react";

export default class CreateProject extends Component {

    handleShow = () => {
        //filtramos si su rol es admin levanta el modal
        if (role === 'ADMIN') {
            setShow(true);
        } else if (role !== 'ADMIN') {//si el rol no es el permitido lanza advertencia
            swal({
                title: "ADVERTENCIA",
                text: "Su rol no tiene permisos para crear un proyecto",
                icon: "warning",
                button: "ok",
            });
        }
    }

    render() {
        return (
            <>

            </>
        )
    }
}
