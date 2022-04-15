import React, { useContext, useEffect, useState } from "react";
import { URL_PROYECTOS } from "../../helpers/endPoints";
import { Link } from 'react-router-dom';
import myphoto from '../../images/perfil.png'



export const ProjectsTable = ({ usuario, index }) => {

    const [nombre,setNombre] = useState('')	
    const [apellido, setApellido] = useState('')
    const [isLoadingProjects, setIsLoadingProjects] = useState('')
    const [project, setProject] = useState('')

    //consultamos el localStorage
    useEffect(() => {

        fetch(URL_PROYECTOS)
            .then((response) => response.json)
            .then((proyecto) => {
                setProject(proyecto.descripcion)
                setIsLoadingProjects(false)
            })
    }, []);

    if (isLoadingProjects) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    } else {
        return (
            <tr>
            <td>{index}</td>
            <td><Link to="./DetailsProject">REGISTRO SISTEMA</Link></td>
            <td>RS</td>
            <td>GESTION DE USUARIOS</td>
            <td className='d-flex'>
                <div className='icon-profile-project'>
                    <img src={myphoto} alt="" />
                </div>
                <span className='sp-name'></span>
            </td>
        </tr>
        )
    }


}