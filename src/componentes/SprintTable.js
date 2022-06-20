import { CButton, CModal, CModalBody, CModalHeader, CModalTitle } from "@coreui/react"
import { Autocomplete, TextField } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import swal from "sweetalert"
import { DataContext } from "../context/DataContext"
import { URL_ADD_US_SPRINT, URL_BACKLOG, URL_GET_SPRINTS, URL_PROYECTOS, URL_US_A_VERIFICAR, URL_US_DETENIDO, URL_US_EN_CURSO, URL_US_EN_VERIFICACION, URL_US_FINALIZADO } from "../helpers/endPoints"
import AddTaskSprint from "./AddTaskSprint"


function SprintTable({ sprintList, id }) {

    const [proyecto, setProyecto] = useState([])
    const [tasksBk, setTasksBk] = useState('')
    const [taskEnCurso, setTaskEnCurso] = useState('')
    const [role, setRole] = useState([])
    const [taskDetenido, setTaskDetenido] = useState('')
    const [taskVerificar, setTaskVerificar] = useState('')
    const [taskEnVerificacion, setTaskEnVerificacion] = useState('')
    const [taskFinalizado, setTaskFinalizado] = useState('')
    const { user } = useContext(DataContext)
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')


    const [userSsstories, setuserSsstories] = useState(sprintList[0].user_stories)



    const [currentScreen, setCurrentScreen] = useState({ us: true, dataa: true })
    const [visible, setVisible] = useState(false);

    const iddd = sprintList[0]._id



    const [user_stories, setUserStories] = useState('')

    //consultamos el localStorage
    useEffect(() => {
        const data = localStorage.getItem('auth')
        if (!data) {
            setNombre(user.usuarioEncontrado.nombre)
            localStorage.setItem('auth', JSON.stringify(user));
            setApellido(user.usuarioEncontrado.apellido)
            setRole(user.usuarioEncontrado.role)
            localStorage.setItem('auth', JSON.stringify(user))
            return
        }
        const usuario = JSON.parse(data);
        setNombre(usuario.usuarioEncontrado.nombre);
        setApellido(usuario.usuarioEncontrado.apellido);
        setRole(usuario.usuarioEncontrado.rol)

        const getUsBk = async () => {
            try {
                const res = await fetch(URL_BACKLOG + id),
                    data = await res.json()
                setTasksBk(data.us)
            } catch (error) {
                console.log(error);
            }
        }
        getUsBk()

        const getProject = async () => {
            try {
                const res = await fetch(URL_PROYECTOS + id),
                    data = await res.json()
                setProyecto(data)
            } catch (error) {
                console.log(error);
            }
        }

        getProject()

        const getUsEnCurso = async () => {
            try {
                const res = await fetch(URL_US_EN_CURSO + id),
                    data = await res.json()
                setTaskEnCurso(data.us)
            } catch (error) {
                console.log(error);
            }
        }
        getUsEnCurso()

        const getUsDetenido = async () => {
            try {
                const res = await fetch(URL_US_DETENIDO + id),
                    data = await res.json()
                setTaskDetenido(data.us)
            } catch (error) {
                console.log(error)
            }
        }
        getUsDetenido()

        const getUsVerificar = async () => {
            try {
                const res = await fetch(URL_US_A_VERIFICAR + id),
                    data = await res.json()
                setTaskVerificar(data.us)
            } catch (error) {
                console.log(error)
            }
        }
        getUsVerificar()

        const getUsEnVerificacion = async () => {
            try {
                const res = await fetch(URL_US_EN_VERIFICACION + id),
                    data = await res.json()
                setTaskEnVerificacion(data.us)
            } catch (error) {
                console.log(error)
            }
        }

        getUsEnVerificacion()

        const getUsFinalizado = async () => {
            try {
                const res = await fetch(URL_US_FINALIZADO + id),
                    data = await res.json()
                setTaskFinalizado(data.us)
            } catch (error) {
                console.log(error)
            }
        }

        getUsFinalizado()
    }, [])


    const editSprint = async () => {
        setVisible(!visible)


    }

    console.log(tasksBk);

    return (
        <>
            <div className='d-flex mb-5'>
                <div>
                    {
                        <h1>{sprintList.map((item) => {
                            return (<span>{item.name} {sprintList.length}</span>)
                        })}</h1>
                    }
                </div>
                <div>
                    <button>iniciar sprint</button>
                </div>
            </div>
            <div className=" col-md box-dashboard">
                <div className='tablelist'>
                    <div className='title-section'>
                        <span>POR HACER</span>
                    </div>
                    <CButton onClick={editSprint} className='createUS ddd'><ion-icon name="add-outline"></ion-icon> añadir tareas a sprint</CButton>
                </div>
            </div>
            {
                currentScreen.us &&
                <CModal scrollable visible={visible} onClose={() => setVisible(false)}>
                    <CModalHeader>
                        <CModalTitle>
                            {
                                sprintList.map(item => {
                                    return (item.name)
                                }) + " " + sprintList.length
                            }
                        </CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        <div className="col-md-12 pt-3">
                            <AddTaskSprint iddd={iddd} tasksBk={tasksBk} />
                        </div>
                    </CModalBody>
                </CModal>
            }
        </>

    )
}


export default SprintTable

