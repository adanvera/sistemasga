import TableList from "./partials/TableList"


function DetailsTableeeee({ sprintList, dataProject, taskFinalizado, taskEnVerificacion, taskVerificar, taskDetenido, taskEnCurso }) {



    return (
        <>
            {/* <div className="d-flex" id="stptptptp">
                <div className=" col-md box-dashboard">
                    <div className='tablelist'>
                        <div className='title-section'>
                            <span>EN CURSO {taskEnCurso.length}</span>
                        </div>
                        {taskEnCurso.length > 0 && taskEnCurso.map((item => {
                            return <TableList item={item} dataProject={dataProject} />
                        }))
                        }
                    </div>
                </div>
                <div className=" col-md box-dashboard">
                    <div className='tablelist'>
                        <div className='title-section'>
                            <span>DETENIDO {taskDetenido.length}</span>
                        </div>
                        {taskDetenido.length > 0 && taskDetenido.map((item => {
                            return <TableList item={item} dataProject={dataProject} />
                        }))
                        }
                    </div>
                </div>
                <div className=" col-md box-dashboard">
                    <div className='tablelist'>
                        <div className='title-section'>
                            <span>A VERIFICAR {taskVerificar.length}</span>
                        </div>
                        {taskVerificar.length > 0 && taskVerificar.map((item => {
                            return <TableList item={item} dataProject={dataProject} />
                        }))
                        }
                    </div>
                </div>
                <div className=" col-md box-dashboard">
                    <div className='tablelist'>
                        <div className='title-section'>
                            <span>EN VERIFICACIÓN {taskEnVerificacion.length}</span>
                        </div>
                        {taskEnVerificacion.length > 0 && taskEnVerificacion.map((item => {
                            return <TableList item={item} dataProject={dataProject} />
                        }))
                        }
                    </div>
                </div>
                <div className=" col-md box-dashboard">
                    <div className='tablelist'>
                        <div className='title-section'>
                            <span>FINALIZADA {taskFinalizado.length}</span>
                        </div>
                        {taskFinalizado.length > 0 && taskFinalizado.map((item => {
                            return <TableList item={item} dataProject={dataProject} />
                        }))
                        }
                    </div>
                </div>
            </div>  */}
        </>

    )
}


export default DetailsTableeeee

