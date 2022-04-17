import React from "react";
import { Link } from "react-router-dom";
import projectLogo from '../../images/logoproject.png'

export const ProjectsTable = ({ proyecto, index }) => {

    console.log(proyecto);

    return (
        <>
            <tr>
                <td>{index}</td>
                <td className="lg" >
                    <Link to="./DetailsProject">
                        <div className="img-project">
                            <img src={projectLogo} alt="" />
                        </div>
                        <div>
                            {proyecto.nombre}
                        </div>
                    </Link>
                </td>
                <td>{proyecto.descripcion}</td>
                <td>Adán Vera</td>
            </tr>
        </>
    )


}