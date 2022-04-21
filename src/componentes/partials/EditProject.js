import React, { useContext, useEffect, useState } from 'react'
import { Container, FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { DataContext } from '../../context/DataContext'
const urlDelPr = "http://localhost:4000/api/proyecto/"
const urlUsers = "http://localhost:4000/api/usuario/"


function EditProject({proyecto}) {

    const [roleAuth, setRoleAuth] = useState([])
	const {user,currentScreen} = useContext(DataContext)
    const [usuario, setUsurio] = useState([])
    const [nombre , setNombre] = useState(proyecto.nombre)
    const [descripcion, setDescripcion] = useState(proyecto.descripcion)

    useEffect(()=>{
		const data = localStorage.getItem('auth')
		if(!data ){
			localStorage.setItem('auth',JSON.stringify(user))
			setRoleAuth(user.usuarioEncontrado.roleAuth)
			return
		}
		const usuarioAuth = JSON.parse(data);
		setRoleAuth(usuarioAuth.usuarioEncontrado.rol)	
	},)

    console.log(roleAuth);
    
    const idPr = proyecto._id

    const deleteProject = async () => {
       //aca debe ir la logica de eliminacion
    }


    const edtitProject = async () =>{
        //logica de modificacion
    }

    return (
        <>
            <Container className="register-box-head">
                <section className="">
                    <Link to="#"><ion-icon name="arrow-back-outline"></ion-icon> Volver atras</Link>
                </section>
            </Container>
            <Container className="register-box">
                <section className="container-fluid register-content">
                    <div id="">
                        <div className='img-create pb-5 d-flex'>
                            
                            <div className='mt-3 pl-2'>
                                <h1>ADMINISTRAR PROYECTO</h1>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <span><ion-icon name="options-outline"></ion-icon>Editar poryecto</span>
                        </div>
                        <div>
                            <span onClick={deleteProject}><ion-icon name="trash-outline"></ion-icon> Eliminar proyecto</span>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default EditProject