import React from 'react';
import { Link } from 'react-router-dom';

import myphoto from '../images/perfil.png'

import { DataContext } from '../context/DataContext'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Navbar() {
    //declaracion de variables
    const { user } = useContext(DataContext)
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')

    //consultamos el localStorage para setear el usuario logueado
    //y estirar su nombre y apellido
    useEffect(() => {
        const data = localStorage.getItem('auth')
        if (!data) {
            setNombre(user.usuarioEncontrado.nombre)
            localStorage.setItem('auth', JSON.stringify(user));
            setApellido(user.usuarioEncontrado.apellido)
            localStorage.setItem('auth', JSON.stringify(user))
            return
        }
        const usuario = JSON.parse(data);
        setNombre(usuario.usuarioEncontrado.nombre);
        setApellido(usuario.usuarioEncontrado.apellido);
    })

    return (
        <div className="navbar justify-content-between w-100 " variant="dark">
            <nav className="items">
                <ion-icon name="reorder-three-outline"></ion-icon>
                <Link to="#home">Inicio</Link>
                <Link to="#proyectos">Proyectos</Link>
                <Link to="#newproject" className="createnewproject mt-1">crear</Link>
            </nav>
            <nav className="">
                <Link to="#pricing" className="d-flex">
                    <div className="t-a">
                        <p className="p-style fw-100">Bienvenido</p>
                        <span className="username">{nombre} {apellido}</span>
                    </div>
                    <div className="pl">
                        <img src={myphoto} alt="" />
                    </div>
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;
