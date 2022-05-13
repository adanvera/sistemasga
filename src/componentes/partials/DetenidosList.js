import React from 'react'
import user_one from '../../images/users/user_one.png'

function DetenidosList({item, dataProject }) {
    const deleteUS = async () => { }
    const showUS = async () => { }
    return (
        <div className='box-status-content' id='boxus'  >
            <div className='row paddd'>
                <div className='col d-flex justify-content-between'>
                    <div className=''>
                        <img src={user_one} alt="" />
                        <span className='pl-1' >Adán Vera </span>
                    </div>
                    <div className='ddd'><ion-icon onClick={deleteUS} name="trash-outline"></ion-icon></div>
                </div>
            </div>
            <div className='row paddd'>
                <div className='text-description' onClick={showUS}>
                    <span>{item.task}</span>
                </div>
            </div>
            <div className='row paddd'>
                <div className='col' >
                    <div className='foot-box-task'>
                        <span className="number-task">US - {item.us_id} [{dataProject?.nombre ? dataProject?.nombre : ''}]</span>
                    </div>
                </div>
                <div className='col commet-icon'>
                    <div>
                        <ion-icon name="chatbox-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetenidosList