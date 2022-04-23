import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectLogo from '../../images/logoproject.png'
import DetailsProject from "../DetailsProject";


export const ProjectsTable = ({ proyecto, index }) => {
    

    const [currentScreen, setCurrentScreen] = useState({ pr: false, other: false, prCreate: false, prDetails:false })

    return (
        <>
            <tr className="projectselected" onClick={() => setCurrentScreen({ ...currentScreen, pr: false, other: false, prCreate:false, prDetails:true})}>
                <td>{index}</td>
                <td className="lg" >
                    <div className="d-flex" to="./DetailsProject">
                        <div className="img-project">
                            <img src={projectLogo} alt="" />
                        </div>
                        <div>
                            {proyecto.nombre}
                        </div>
                    </div>
                </td>
                <td>{proyecto.descripcion}</td>
                <td>{proyecto.responsable}</td>
            </tr>
            {currentScreen.prDetails && <DetailsProject proyecto={proyecto}/>}
        </>
    )


}