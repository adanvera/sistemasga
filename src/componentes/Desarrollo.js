import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import myphoto from '../images/perfil.png'
import { DataContext } from '../context/DataContext'
const urlUsers = "http://localhost:4000/api/usuario/"




function Desarrollo({ rol }) {
  //variables a ser utilizadas
  const [currentScreen, setCurrentScreen] = useState({ us: true, rol: false, per: false })
  const { user } = useContext(DataContext)
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')

  //consultamos el localStorage 
  //se obitne el nombre y apillo del usuario logeado
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
    <>
      <div className="navbar justify-content-between w-100 " variant="dark">
        <nav className="items">
          <ion-icon name="reorder-three-outline"></ion-icon>
          <button type="submit"
            className="nav-sg"
            onClick={() => setCurrentScreen({ ...currentScreen, us: true, rol: false, per: false })} >Desarrollo
          </button>
          <button type="submit" className="nav-sg">Item 1</button>
          <button type="submit" className="nav-sg" onClick={() => setCurrentScreen({ ...currentScreen, rol: true, us: false, per: false })} >Item 2</button>
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
    </>
  );
}

export default Desarrollo;
