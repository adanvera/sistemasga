import React, { useContext, useEffect, useState } from "react";
import { URL_PROYECTOS } from "../../helpers/endPoints";
import { Link } from 'react-router-dom';
import myphoto from '../../images/perfil.png'
import { CButton } from "@coreui/react";
import { log } from "react-modal/lib/helpers/ariaAppHider";




export const ProjectsTable = ({ proyecto, index }) => {

    console.log(proyecto);

    return (
        <>
            <tr>
                <td>{index}</td>
                <td>{proyecto.nombre}</td>
                <td>{proyecto.descripcion}</td>
                <td className="d-flex justify-content-center">
                    <div className="padright deleteuser">
                        <span className="pten">
                            <ion-icon name="trash-bin-outline"></ion-icon>
                        </span>
                    </div>
                    <div className="padright edituser">
                        <CButton className="pten">
                            <ion-icon name="options-outline"></ion-icon>
                        </CButton>
                    </div>
                </td>
            </tr>
        </>
    )


}