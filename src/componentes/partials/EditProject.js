import React, { useContext, useEffect, useState } from 'react'
import { Container, FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { DataContext } from '../../context/DataContext'
import { URL_ELMINAR_PROJECT } from '../../helpers/endPoints'
import EditDataProject from './EditDataProject'
const urlUsers = "http://localhost:4000/api/usuario/"



function EditProject({proyecto}) {

    const [roleAuth, setRoleAuth] = useState([])
	const {user,setUser} = useContext(DataContext)
    const [usuario, setUsurio] = useState([])

    const [currentScreen, setCurrentScreen] = useState({ prDetails: true, prEdit: false })

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
    const idPr = proyecto._id
    console.log(URL_ELMINAR_PROJECT+idPr);
    
   

    const deleteProject = async () => {
       //aca debe ir la logica de eliminacion
       if(roleAuth === "ADMIN"){
            swal({
                title: "¿Estas seguro?",
                text: "Una vez eliminado el proyecto no se puede revertir",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then(async(willDelete)=>{
                if(willDelete){
                    swal("Proyecto eliminado exitosamente",{
                        icon: "success",
                    });
                    await fetch(URL_ELMINAR_PROJECT+idPr,{
                        method: "DELETE",
                        headers: {"Content-Type": "application/jason"}
                    });
                }
            });
       }else (swal({ 
           text: "Su rol no posse permiso para eliminar un proyecto",
           icon: "warning",
       }))
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
                            <span onClick={() => setCurrentScreen({ ...currentScreen, prDetails: false, prEdit: true })}><ion-icon name="options-outline"></ion-icon>Editar poryecto</span>
                        </div>
                        <div>
                            <span onClick={deleteProject} ><ion-icon name="trash-outline"></ion-icon> Eliminar proyecto</span>
                        </div>
                    </div>
                </section>
            </Container>
            {currentScreen.prEdit && <EditDataProject proyecto={proyecto}/>}
            

        </>
    )
}

export default EditProject