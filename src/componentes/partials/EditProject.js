import React from 'react'
import { Container, FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

const urlDelPr = "http://localhost:4000/api/proyecto/"


function EditProject({proyecto}) {


    
    const idPr = proyecto._id

    const deleteProject = async () => {
       //aca debe ir la logica de eliminacion
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
                await fetch(urlDelPr + idPr,{
                    method: "DELETE",
                    headers: {"Content-Type": "application/jason"}
                });
           }
       });
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