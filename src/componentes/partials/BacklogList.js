import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert'

import user_one from '../../images/users/user_one.png'



function BacklogList({proyecto}) {
    const idPr = useState(proyecto._id)

    const [visible, setVisible] = useState(false)

    const showUS = async () => {
        setVisible(!visible)
    }

    return (
        <>
            <button className='box-status-content' onClick={showUS} >
                <div className='row paddd'>
                    <div className='col'>
                        <div className='user-pic'>
                            <img src={user_one} alt="" />
                            <span className='pl-1' >Adán Vera</span>
                        </div>
                    </div>

                </div>
                <div className='row paddd'>
                    <div className='text-description'>
                        <span>Desarrollo Front- End de Login, basado en diseño de prototipo hecho</span>
                    </div>
                </div>
                <div className='row paddd'>
                    <div className='col'>
                        <div className='foot-box-task'>
                            <span className="number-task">PR-345 [Banca web]</span>
                        </div>
                    </div>
                    <div className='col commet-icon'>
                        <div>
                            <ion-icon name="chatbox-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            </button>

            <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader onClose={() => setVisible(false)}>
                    <CModalTitle>User Story</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <>Hola</>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setVisible(false)}>cancelar</CButton>
                    <CButton className="btn-update">Aceptar</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default BacklogList