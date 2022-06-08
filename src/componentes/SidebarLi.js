
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../context/DataContext'
import myLogo from '../images/iconwhite.png'
const urlRoles = "http://localhost:4000/api/role/"


function SidebarLi() {
    const navigate = useNavigate()
    const { user, currentScreen, setCurrentScreen } = useContext(DataContext)
    const [role, setRole] = useState([])
    const [roleAuth, setRoleAuth] = useState([])

    //funcion para cerrar sesion
    const logout = () => {
        localStorage.clear()
        navigate('/')
    }

    //obtenemos el listado de roles
    useEffect(() => {
        const getRole = async () => {
            try {
                const res = await fetch(urlRoles),
                    data = await res.json()
                setRole(data?.roles)
            } catch (error) {
                console.log(error);
            }
        }
        getRole()

        const data = localStorage.getItem('auth')
        if (!data) {
            localStorage.setItem('auth', JSON.stringify(user))
            setRoleAuth(user?.usuarioEncontrado?.roleAuth)
            return
        }
        const usuarioAuth = JSON.parse(data);
        setRoleAuth(usuarioAuth?.usuarioEncontrado?.rol)
    }, [])

    const dashboardRef = React.createRef();

    return (
        <div ref={dashboardRef}>
            {
                role.map((item) => {
                    if ((item?.rol === roleAuth) && (item?.acceso.includes('proyecto'))) {
                        return (
                            <li>
                                <button
                                    className="list-group-item list-group-item-action p-3"
                                    onClick={(e) =>
                                        setCurrentScreen({ ...currentScreen, proyectos: true, seguridad: false, desarrollo: false })
                                    }
                                >
                                    <ion-icon name="grid-outline"></ion-icon>{' '}
                                    <span className="p-2">Proyecto</span>{' '}
                                </button>
                            </li>
                        )
                    }
                })
            }
            {
                role.map((item) => {
                    if ((item?.rol === roleAuth) && (item?.acceso.includes('desarrollo'))) {
                        return (
                            <li>
                                <button className="list-group-item list-group-item-action p-3"
                                    onClick={(e) =>
                                        setCurrentScreen({ ...currentScreen, desarrollo: true, proyectos: false, seguridad: false })
                                    }
                                >
                                    {' '}
                                    <ion-icon name="git-compare-outline"></ion-icon>{' '}
                                    <span className="p-2">Desarrollo</span>{' '}
                                </button>
                            </li>
                        )
                    }
                })
            }
            {
                role.map((item) => {
                    if ((item?.rol === roleAuth) && (item?.acceso.includes('seguridad'))) {
                        return (
                            <li>
                                <button className="list-group-item list-group-item-action p-3"
                                    onClick={(e) =>
                                        setCurrentScreen({ ...currentScreen, seguridad: true, proyectos: false, desarrollo: false })
                                    }>
                                    <ion-icon name="finger-print-outline"></ion-icon>{' '}
                                    <span className="p-2">Seguridad</span>{' '}
                                </button>
                            </li>
                        )
                    }
                })
            }
        </div>
    )
}

export default SidebarLi