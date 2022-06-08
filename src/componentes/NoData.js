import React, { Fragment } from 'react'

function NoData() {

    //sirve para mostrar para una tabla sin registros
    return (
        <Fragment className="justify-content-center">
            <div className='data-table'>
                <div>
                    <ion-icon name="alert-circle-outline"></ion-icon>
                </div>
                <span>sin registros</span>
            </div>
        </Fragment>
    )
}

export default NoData