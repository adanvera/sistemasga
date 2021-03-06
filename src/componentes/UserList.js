import React from 'react'

function UserList({ usuario }) {
    //para obtener el listado de usuarios
    return (
        <>
            {
                usuario.map(usuario => {
                    return (<option value={usuario.uui}>{usuario.nombre} {usuario.apellido}</option>)
                })
            }
        </>
    )
}

export default UserList