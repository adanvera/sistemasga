import React from 'react';
import { Link } from 'react-router-dom';

import myphoto from '../images/perfil.png'

import { DataContext } from '../context/DataContext'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

function Navbar() {
    const {user} = useContext(DataContext)
	const [nombre,setNombre] = useState('')	
	const navigate = useNavigate()


	//consultamos el localStorage
	useEffect(()=>{
		const data = localStorage.getItem('auth')
		if(!data ){
			setNombre(user.usuarioEncontrado.nombre)
			localStorage.setItem('auth',JSON.stringify(user))
			return
		}
		const usuario = JSON.parse(data);
		setNombre(usuario.usuarioEncontrado.nombre);
	},)

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
                    <span className="username">{nombre}</span>
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
