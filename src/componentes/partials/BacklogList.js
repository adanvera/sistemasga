import React from 'react'
import user_one from '../../images/users/user_one.png'

function BacklogList() {

    return (
        <>
            <div className='box-status-content'>
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
            </div>
        </>
    )
}

export default BacklogList