import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import projectLogo from '../../images/logoproject.png'
import DetailsProject from "../DetailsProject";
import user_one from '../../images/users/user_one.png'
import user_none from '../../images/users/icon.jpg'
const urlUsers = "http://localhost:4000/api/usuario/"


export const ProjectsTable = ({ proyecto, index }) => {


    const [currentScreen, setCurrentScreen] = useState({ pr: false, other: false, prCreate: false, prDetails: false })
    const [usuario, setUsurio] = useState([])


    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetch(urlUsers),
                    data = await res.json()
                setUsurio(data.usuarios)
            } catch (error) {
                console.log(error);
            }
        }
        getUser()
    }, [])

    const verifyUser = (pro) => {
        if (pro === "sin responsable") {
            return (
                <>
                    <div className="img-none"><img src={user_none} /><span>{pro}</span></div>

                </>
            )
        } else {
            return (
                <>
                    <div className="img-none"><img src={user_one} /><span>{pro}</span></div>
                </>
            )
        }

    }

    return (
        <>
            <tr className="projectselected" onClick={() => setCurrentScreen({ ...currentScreen, pr: false, other: false, prCreate: false, prDetails: true })}>
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
                <td>
                    {verifyUser(proyecto.responsable)}
                </td>
            </tr>
            {currentScreen.prDetails && <DetailsProject proyecto={proyecto} />}
        </>
    )


}