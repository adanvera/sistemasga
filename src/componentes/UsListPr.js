import React from 'react'

function UsListPr({ usuario }) {
    return (
        <>
            {
                usuario.map(usuario => {
                    return (<option value={usuario.nombre+" "+usuario.apellido}>{usuario.nombre} {usuario.apellido}</option>)
                })
            }
        </>
    )
}

export default UsListPr